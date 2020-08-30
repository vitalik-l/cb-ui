import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';

class ExchangeModal extends Component {
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
      const { convertingCurrency } = this.state;
      const { balances } = this.props;
      const errors = {};

      if (!balances.get(convertingCurrency)
        || convertingValue.value > balances.get(convertingCurrency)
      ) {
        errors.convertingValue = 'Please enter an amount within your current wallet balance';
      }

      if (shouldReturnErrors) return errors;
      this.setState({ errors });
      return !Object.keys(errors).length;
    };

    submitForm = () => {
      if ((!this.form.checkValidity() && !this.form.reportValidity()) || !this.validate()) return;
      const { onExchange } = this.props;
      if (onExchange) {
        const {
          convertingCurrency,
          receiveCurrency,
          convertingValue,
          receiveValue,
        } = this.state;

        onExchange({
          convertingCurrency,
          receiveCurrency,
          convertingValue,
          receiveValue,
        });
      }

      this.setState({ pauseClick: true }, () => {
        setTimeout(() => {
          this.setState({ pauseClick: false });
        }, 1000);
      });
    };

    convertValue = (value, currencyOut) => {
      let result;
      const { rate, currencies } = this.props;
      const { receiveCurrency } = this.state;
      if (currencyOut === rate.currencyOut) {
        result = +value * rate.value;
      } else {
        result = +value / rate.value;
      }
      if (currencies[receiveCurrency].minimumFractionDigits) {
        result = result.toFixed(currencies[receiveCurrency].minimumFractionDigits);
        if (result[result.length - 1] === '0') result = parseFloat(result);
      }
      return result;
    };

    onConvertingValueChange = (e) => {
      const errors = this.validate(true);
      const { receiveCurrency } = this.state;
      this.setState({
        convertingValue: e.target.value,
        receiveValue: this.convertValue(e.target.value, receiveCurrency),
        errors,
      });
    };

    onReceiveValueChange = (e) => {
      const errors = this.validate(true);
      const { convertingCurrency } = this.state;
      this.setState({
        receiveValue: e.target.value,
        convertingValue: this.convertValue(e.target.value, convertingCurrency),
        errors,
      });
    };

    onConvertCurrencyChange = (e) => {
      const { currencies } = this.props;
      const { convertingValue, receiveCurrency } = this.state;
      this.setState({
        convertingCurrency: e.target.value,
        receiveCurrency: Object.keys(currencies).filter((i) => i !== e.target.value)[0],
      }, () => {
        this.setState({
          receiveValue: this.convertValue(convertingValue, receiveCurrency),
        });
      });
    };

    render() {
      const {
        currencies,
        balances,
        modalTitle,
        rate,
        fmtMoney,
        exchangeSuccess,
        onAnotherExchange,
        ...props
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
            ref={(el) => {
              this.form = el;
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              You are converting from:
            </div>
            <div className="cb-ExchangeForm__inputs">
              <div>
                <select className="cb-Input" onChange={this.onConvertCurrencyChange} value={convertingCurrency}>
                  {
                    Object.keys(currencies)
                      .map((currency) => <option value={currency}>{currency}</option>)
                  }
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
                  {
                    Object.keys(currencies)
                      .filter((i) => i !== convertingCurrency)
                      .map((currency) => <option value={currency}>{currency}</option>)
                  }
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

ExchangeModal.propTypes = {
  currencies: PropTypes.shape({}),
  balances: PropTypes.instanceOf(Map),
  onExchange: PropTypes.func,
  rate: PropTypes.shape({
    currencyOut: PropTypes.number,
    value: PropTypes.number,
    currencyIn: PropTypes.string,
  }),
  modalTitle: PropTypes.string,
  exchangeSuccess: PropTypes.bool,
  onAnotherExchange: PropTypes.func,
  fmtMoney: PropTypes.func,
};

ExchangeModal.defaultProps = {
  currencies: {},
  balances: new Map(),
  modalTitle: 'GLT Tokens',
  rate: { currencyIn: 'GLT', currencyOut: 'BTC', value: 0.0005 },
  fmtMoney: (v, currency) => `${v || 0}${currency}`,
};

export default ExchangeModal;
