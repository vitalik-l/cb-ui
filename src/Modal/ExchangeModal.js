import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';

class CBCExchangeModal extends Component {
    static propTypes = {
        currencies: PropTypes.object,
        balances: PropTypes.any,
        onExchange: PropTypes.func,
        rate: PropTypes.object,
        modalTitle: PropTypes.string
    };

    static defaultProps = {
        currencies: {},
        balances: new Map(),
        modalTitle: 'GLT Tokens',
        rate: {currencyIn: 'GLT', currencyOut: 'BTC', value: 0.0005},
        fmtMoney: (v, currency) => `${v || 0}${currency}`
    };

    constructor(props) {
        super(props);
        const currenciesKeys = Object.keys(props.currencies);
        this.state = {
            errors: {},
            convertingValue: 0,
            receiveValue: 0,
            convertingCurrency: currenciesKeys[0],
            receiveCurrency: currenciesKeys[1],
        };
        this.submitBuy = this.submitForm.bind(this, true);
        this.submitSell = this.submitForm.bind(this, false);
    }

    validate = (shouldReturnErrors = false) => {
        const {convertingValue} = this.form;
        let errors = {};

        if (!this.props.balances.get(this.state.convertingCurrency) || convertingValue.value > this.props.balances.get(this.state.convertingCurrency)) errors.convertingValue = 'Please enter an amount within your current wallet balance';

        if (shouldReturnErrors) return errors;
        this.setState({errors});
        return !Object.keys(errors).length;
    };

    submitForm(buy) {
        if (!this.form.checkValidity() && !this.form.reportValidity() || !this.validate()) return;
        this.props.onExchange && this.props.onExchange({
            convertingCurrency: this.state.convertingCurrency,
            receiveCurrency: this.state.receiveCurrency,
            convertingValue: this.state.convertingValue,
            receiveValue: this.state.receiveValue
        });
        this.setState({pauseClick: true}, () => {
            setTimeout(() => {
                this.setState({pauseClick: false});
            }, 1000);
        });
    };

    calculateReceiveValue = convertingValue => {
        let result;
        if (this.state.receiveCurrency === this.props.rate.currencyOut) {
            result = +((+convertingValue * this.props.rate.value));
        } else {
            result = +((+convertingValue / this.props.rate.value));
        }
        if (this.props.currencies[this.state.receiveCurrency].minimumFractionDigits) return parseFloat(result.toFixed(this.props.currencies[this.state.receiveCurrency].minimumFractionDigits));
        return result;
    };

    calculateConvertingValue = receiveValue => {
        let result;
        if (this.state.convertingCurrency === this.props.rate.currencyIn) {
            result = +((+receiveValue / this.props.rate.value));
        } else {
            result = +((+receiveValue * this.props.rate.value));
        }
        if (this.props.currencies[this.state.convertingCurrency].minimumFractionDigits) return parseFloat(result.toFixed(this.props.currencies[this.state.convertingCurrency].minimumFractionDigits));
        return result;
    };

    onConvertingValueChange = e => {
        const errors = this.validate(true);
        this.setState({
            convertingValue: e.target.value,
            receiveValue: this.calculateReceiveValue(e.target.value),
            errors
        });
    };

    onReceiveValueChange = e => {
        const errors = this.validate(true);
        this.setState({
            receiveValue: e.target.value,
            convertingValue: this.calculateConvertingValue(e.target.value),
            errors
        });
    };

    onConvertCurrencyChange = e => {
        this.setState({
            convertingCurrency: e.target.value,
            receiveCurrency: Object.keys(this.props.currencies).filter(i => i !== e.target.value)[0],
        }, () => {
           this.setState({
               receiveValue: this.calculateReceiveValue(this.state.convertingValue)
           })
        });
    };

    render() {
        let {currencies, balances, modalTitle, rate, fmtMoney, ...props} = this.props;
        const {errors, pauseClick, convertingCurrency, convertingValue, receiveCurrency, receiveValue} = this.state;
        let submitDisabled = !!Object.keys(errors).length || !receiveValue || pauseClick;

        return (
            <Modal className="cb-ExchangeModal" {...props}>
                <ModalHeader>
                    {modalTitle}
                </ModalHeader>
                <ModalContent>
                    <form
                        className="cb-ExchangeForm"
                        autoComplete="off"
                        ref={el => this.form = el}
                        onSubmit={e => e.preventDefault()}
                    >
                        <div>
                            You are converting from:
                        </div>
                        <div className="cb-ExchangeForm__inputs">
                            <div>
                                <select className="cb-Input" onChange={this.onConvertCurrencyChange} value={convertingCurrency}>
                                    {Object.keys(currencies).map(currency => <option value={currency}>{currency}</option>)}
                                </select>

                            </div>
                            <div>
                                <input
                                    type="number"
                                    className="cb-Input cb-ExchangeForm-input"
                                    name="convertingValue"
                                    min={0}
                                    step="any"
                                    required
                                    value={convertingValue}
                                    onInput={this.onConvertingValueChange}
                                />
                            </div>
                        </div>
                        <div className="cb-ExchangeForm-balance">
                            <div>
                                {errors.convertingValue ?
                                    <div className="cb-Input-error">
                                        {errors.convertingValue}
                                    </div>
                                : null}
                            </div>
                            <div>
                                Wallet balance: {fmtMoney(balances.get(convertingCurrency), convertingCurrency)}
                            </div>
                        </div>
                        <hr />
                        <div>
                            You will receive:
                        </div>
                        <div className="cb-ExchangeForm__inputs">
                            <div>
                                <select className="cb-Input" value={receiveCurrency}>
                                    {Object.keys(currencies).filter(i => i !== convertingCurrency).map(currency => <option value={currency}>{currency}</option>)}
                                </select>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    className="cb-Input cb-ExchangeForm-input"
                                    min={0}
                                    name="receiveValue"
                                    step="any"
                                    required
                                    value={receiveValue}
                                    onInput={this.onReceiveValueChange}
                                />
                            </div>
                        </div>
                        <div className="cb-ExchangeForm-balance">
                            <div>
                                {errors.receiveValue ?
                                    <div className="cb-Input-error">
                                        {errors.receiveValue}
                                    </div>
                                    : null}
                            </div>
                            <div>
                                Wallet balance: {fmtMoney(balances.get(receiveCurrency), receiveCurrency)}
                            </div>
                        </div>
                        <div className="cb-ExchangeForm__action">
                            <div>
                                CURRENT RATE
                            </div>
                            <div>
                                1 {rate.currencyIn} ~ {rate.value} {rate.currencyOut}
                            </div>
                            <button className="cb-Button primary" disabled={submitDisabled} onClick={this.submitForm}>CONVERT</button>
                        </div>
                    </form>
                </ModalContent>
            </Modal>
        );
    }
}

export default CBCExchangeModal;
