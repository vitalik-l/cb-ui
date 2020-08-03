import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';

class ExchangeModal extends Component {
    static propTypes = {
      currencies: PropTypes.object,
      balances: PropTypes.any,
      onExchange: PropTypes.func,
      rate: PropTypes.object,
      modalTitle: PropTypes.string,
      exchangeSuccess: PropTypes.bool,
      onAnotherExchange: PropTypes.func,
    };

    static defaultProps = {
      currencies: {},
      balances: new Map(),
      modalTitle: 'GLT Tokens',
      rate: { currencyIn: 'GLT', currencyOut: 'BTC', value: 0.0005 },
      fmtMoney: (v, currency) => `${v || 0}${currency}`,
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
    }

    validate = (shouldReturnErrors = false) => {
      const { convertingValue } = this.form;
      const errors = {};

      if (!this.props.balances.get(this.state.convertingCurrency) || convertingValue.value > this.props.balances.get(this.state.convertingCurrency)) errors.convertingValue = 'Please enter an amount within your current wallet balance';

      if (shouldReturnErrors) return errors;
      this.setState({ errors });
      return !Object.keys(errors).length;
    };

    submitForm = () => {
      if (!this.form.checkValidity() && !this.form.reportValidity() || !this.validate()) return;
      this.props.onExchange && this.props.onExchange({
        convertingCurrency: this.state.convertingCurrency,
        receiveCurrency: this.state.receiveCurrency,
        convertingValue: this.state.convertingValue,
        receiveValue: this.state.receiveValue,
      });
      this.setState({ pauseClick: true }, () => {
        setTimeout(() => {
          this.setState({ pauseClick: false });
        }, 1000);
      });
    };

    convertValue = (value, currencyOut) => {
      let result;
      if (currencyOut === this.props.rate.currencyOut) {
        result = +value * this.props.rate.value;
      } else {
        result = +value / this.props.rate.value;
      }
      if (this.props.currencies[this.state.receiveCurrency].minimumFractionDigits) {
        result = result.toFixed(this.props.currencies[this.state.receiveCurrency].minimumFractionDigits);
        if (result[result.length - 1] === '0') result = parseFloat(result);
      }
      return result;
    };

    onConvertingValueChange = (e) => {
      const errors = this.validate(true);
      this.setState({
        convertingValue: e.target.value,
        receiveValue: this.convertValue(e.target.value, this.state.receiveCurrency),
        errors,
      });
    };

    onReceiveValueChange = (e) => {
      const errors = this.validate(true);
      this.setState({
        receiveValue: e.target.value,
        convertingValue: this.convertValue(e.target.value, this.state.convertingCurrency),
        errors,
      });
    };

    onConvertCurrencyChange = (e) => {
      this.setState({
        convertingCurrency: e.target.value,
        receiveCurrency: Object.keys(this.props.currencies).filter((i) => i !== e.target.value)[0],
      }, () => {
        this.setState({
          receiveValue: this.convertValue(this.state.convertingValue, this.state.receiveCurrency),
        });
      });
    };

    render() {
      const {
        currencies, balances, modalTitle, rate, fmtMoney, exchangeSuccess, onAnotherExchange, ...props
      } = this.props;
      const {
        errors, pauseClick, convertingCurrency, convertingValue, receiveCurrency, receiveValue,
      } = this.state;
      const submitDisabled = !!Object.keys(errors).length || !receiveValue || pauseClick;
      let modalContent;

      if (exchangeSuccess) {
        modalContent = (
          <div className="cb-ExchangeSuccess">
            <h3>Success!</h3>
            <p>
              You converted
              {' '}
              {fmtMoney(convertingValue, convertingCurrency)}
              {' '}
              to
              {fmtMoney(receiveValue, receiveCurrency)}
            </p>
            <p>
              RATE FOR THIS EXCHANGE
              <br />
              <div>
                1
                {' '}
                {rate.currencyIn}
                {' '}
                ~
                {rate.value}
                {' '}
                {rate.currencyOut}
              </div>
            </p>
            <p className="cb-ExchangeSuccess__actions">
              <div>
                <button className="cb-Button primary" onClick={onAnotherExchange}>MAKE ANOTHER CONVERSION</button>
              </div>
              <div>
                <button className="cb-Button" onClick={props.onClose}>CLOSE</button>
              </div>
            </p>
          </div>
        );
      } else {
        modalContent = (
          <form
            className="cb-ExchangeForm"
            autoComplete="off"
            ref={(el) => this.form = el}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              You are converting from:
            </div>
            <div className="cb-ExchangeForm__inputs">
              <div>
                <select className="cb-Input" onChange={this.onConvertCurrencyChange} value={convertingCurrency}>
                  {Object.keys(currencies).map((currency) => <option value={currency}>{currency}</option>)}
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
                {errors.convertingValue
                  ? (
                    <div className="cb-Input-error">
                      {errors.convertingValue}
                    </div>
                  )
                  : null}
              </div>
              <div>
                Wallet balance:
                {' '}
                {fmtMoney(balances.get(convertingCurrency), convertingCurrency)}
              </div>
            </div>
            <hr />
            <div>
              You will receive:
            </div>
            <div className="cb-ExchangeForm__inputs">
              <div>
                <select className="cb-Input" value={receiveCurrency}>
                  {Object.keys(currencies).filter((i) => i !== convertingCurrency).map((currency) => <option value={currency}>{currency}</option>)}
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
                {errors.receiveValue
                  ? (
                    <div className="cb-Input-error">
                      {errors.receiveValue}
                    </div>
                  )
                  : null}
              </div>
              <div>
                Wallet balance:
                {' '}
                {fmtMoney(balances.get(receiveCurrency), receiveCurrency)}
              </div>
            </div>
            <div className="cb-ExchangeForm__action">
              <div>
                CURRENT RATE
              </div>
              <div>
                1
                {' '}
                {rate.currencyIn}
                {' '}
                ~
                {rate.value}
                {' '}
                {rate.currencyOut}
              </div>
              <button className="cb-Button primary" disabled={submitDisabled} onClick={submitDisabled ? null : this.submitForm}>CONVERT</button>
            </div>
          </form>
        );
      }

      return (
        <Modal className="cb-ExchangeModal" {...props}>
          <ModalHeader>
            {modalTitle}
          </ModalHeader>
          <ModalContent>
            {modalContent}
          </ModalContent>
        </Modal>
      );
    }
}

export default ExchangeModal;
