import React, { Component } from 'react';
import validate from 'bitcoin-address-validation';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';

const ADDRESS_LENGTH_MIN = 34;
const ADDRESS_LENGTH_MAX = 44;

class WithdrawalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: props.currency,
      amount: '',
      address: '',
      priority: 'medium',
      errors: {},
    };
  }

  get balance() {
    const { balances } = this.props;
    const { currency } = this.state;
    return balances.get(currency.code);
  }

  validate = () => {
    const { amount, address } = this.state;
    const errors = {};
    if (amount && (amount > this.balance || isNaN(amount) || amount <= 0)) {
      errors.amount = 'Invalid value';
    }
    if (
      !address || (
        address && (address.length < ADDRESS_LENGTH_MIN || address.length > ADDRESS_LENGTH_MAX)
      )
    ) {
      errors.address = `The address must be from ${ADDRESS_LENGTH_MIN} to ${ADDRESS_LENGTH_MAX} characters`;
    } else if (!validate(address)) {
      errors.address = 'Address seems incorrect';
    }
    this.setState({ errors });
    return !Object.keys(errors).length;
  };

  onCurrencyChange = ({ target }) => {
    const { currencies } = this.props;
    this.setState({ currency: currencies[target.value] });
  };

  onPriorityChange = (e) => {
    this.setState({ priority: e.target.value });
  };

  submitForm = () => {
    if ((!this.form.checkValidity() && !this.form.reportValidity()) || !this.validate()) return;
    // do submit
    const { onWithdraw } = this.props;
    const {
      amount, currency, address, priority,
    } = this.state;
    if (onWithdraw) {
      onWithdraw({
        amount,
        currency: currency.code,
        address,
        priority,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { getWithdrawalFee } = this.props;
    const {
      amount, currency, address, priority,
    } = this.state;
    this.setState({ [target.name]: target.value }, () => {
      if (!this.validate()) return;
      if (getWithdrawalFee) {
        getWithdrawalFee({
          amount,
          currency: currency.code,
          address,
          priority: priority.toUpperCase(),
        });
      }
    });
  };

  fillAmount = () => {
    this.setState({ amount: +this.balance });
  };

  render() {
    const {
      currency, amount, errors, priority,
    } = this.state;
    const {
      withdrawFee, requestStatus, currencies, fmtMoney, onClose, ...props
    } = this.props;
    const disableWithdraw = Boolean(!withdrawFee || !!Object.keys(errors).length);
    const balance = this.balance || 0;

    return (
      <Modal className="cb-WithdrawalModal" {...props}>
        <ModalHeader>
          Withdraw
        </ModalHeader>
        <ModalContent>
          <form
            name="withdraw"
            ref={(el) => {
              this.form = el;
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <table className="property-inputs">
              <tbody>
                <tr>
                  <td><label>Currency:</label></td>
                  <td>
                    <select className="cb-Input" name="currency" onChange={this.onCurrencyChange} value={currency.code}>
                      <option value="" disabled>Select currency</option>
                      {
                        Object.keys(currencies)
                          .map((cur) => (
                            <option
                              value={currencies[cur].code}
                              key={currencies[cur].code}
                            >
                              {currencies[cur].title}
                            </option>
                          ))
                      }
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <fieldset>
              <label>
                You current balance is:
                <span className="current-balance" onClick={this.fillAmount}>{fmtMoney(balance, currency.code)}</span>
              </label>
            </fieldset>
            <fieldset>
              <label className="fieldset__label">Amount</label>
              {errors.amount ? <span className="cb-Input-error">{errors.amount}</span> : null}
              <input
                type="number"
                className="cb-Input fieldset__value"
                required
                min="0"
                step="any"
                pattern="[0-9]+([,\.][0-9]+)?"
                placeholder={`min ${currency.minWithdrawalAmount} ${currency.sign}`}
                value={amount}
                name="amount"
                onInput={this.onInputChange}
              />
            </fieldset>
            <fieldset>
              <label className="fieldset__label">Address</label>
              {errors.address ? <span className="cb-Input-error">{errors.address}</span> : null}
              <input
                type="text"
                className="cb-Input fieldset__value"
                required
                placeholder={`your ${currency.title.toLowerCase()} address`}
                name="address"
                maxLength="100"
                pattern="^[A-Za-z0-9]{34,44}$"
                onInput={this.onInputChange}
              />
            </fieldset>
            <fieldset><label>Requires Fee selection</label></fieldset>
            <fieldset>
              <label className="fieldset__label">
                <b>Priority</b>
                <br />
                <small>*Higher priority means faster confirmation during high network load</small>
              </label>
              <div className="fieldset__value fieldset__value--group" onChange={this.onInputChange}>
                <div>
                  <input type="radio" id="low" name="priority" value="low" defaultChecked={priority === 'low'} />
                  <label htmlFor="low">Low Priority</label>
                </div>

                <div>
                  <input type="radio" id="medium" name="priority" value="medium" defaultChecked={priority === 'medium'} />
                  <label htmlFor="medium">Medium Priority</label>
                </div>

                <div>
                  <input type="radio" id="high" name="priority" value="high" defaultChecked={priority === 'high'} />
                  <label htmlFor="high">High Priority</label>
                </div>
              </div>
            </fieldset>
            {withdrawFee ? (
              <fieldset>
                <label>
                  Transaction fee of
                  <b>{`${withdrawFee}  ${currency.sign}`}</b>
                  {' '}
                  will be applied.
                </label>
              </fieldset>
            ) : null}
            {requestStatus
              ? (
                <fieldset>
                  <label>
                    Status:
                    {requestStatus}
                  </label>
                </fieldset>
              )
              : null}
          </form>
        </ModalContent>
        <ModalActions>
          <button className="cb-Button" onClick={onClose}>{requestStatus ? 'Close' : 'Cancel'}</button>
          {
            !requestStatus
              ? <button className="cb-Button primary" onClick={this.submitForm} disabled={disableWithdraw}>Withdraw</button> : null
          }
        </ModalActions>
      </Modal>
    );
  }
}

WithdrawalModal.propTypes = {
  balances: PropTypes.instanceOf(Map),
  currency: PropTypes.shape({}),
  onWithdraw: PropTypes.func,
  currencies: PropTypes.shape({}),
  getWithdrawalFee: PropTypes.func,
  onClose: PropTypes.func,
  fmtMoney: PropTypes.func,
  withdrawFee: PropTypes.string,
  requestStatus: PropTypes.string,
};

WithdrawalModal.defaultProps = {
  balances: new Map(),
  currencies: {},
};

export default WithdrawalModal;
