import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from './Modal';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import InputGroup from '../InputGroup';

const RATE = 0.0005;

class CBCExchangeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      btcValue: 0,
      cbcValue: 0,
      pauseClick: false,
      sellHovered: false,
    };
    this.submitBuy = this.submitForm.bind(this, true);
    this.submitSell = this.submitForm.bind(this, false);
  }

  validate = () => {
    const { amount } = this.form;
    const errors = {};

    if (+amount.value > 3000000) errors.amount = 'Max amount is 3 000 000';

    this.setState({ errors });
    return !Object.keys(errors).length;
  };

  submitForm(buy) {
    if ((!this.form.checkValidity() && !this.form.reportValidity()) || !this.validate()) return;
    const { amount } = this.form;
    const { onExchange } = this.props;
    if (onExchange) {
      onExchange(buy, +amount.value);
    }
    this.setState({ pauseClick: true }, () => {
      setTimeout(() => {
        this.setState({ pauseClick: false });
      }, 1000);
    });
  }

  convertCurrency(value) {
    this.setState({
      btcValue: +((+value * RATE).toFixed(4)),
    });
  }

  onAmountChange = (e) => {
    this.setState({
      cbcValue: e.target.value,
    });
    if (!this.validate()) return;
    this.convertCurrency(e.target.value);
  };

  sellMouseEnter = () => {
    this.setState({ sellHovered: true });
  };

  sellMouseLeave = () => {
    this.setState({ sellHovered: false });
  };

  render() {
    const {
      currencies, balances, ...props
    } = this.props;
    let { disableSell } = this.props;
    const {
      errors, btcValue, cbcValue, pauseClick, sellHovered,
    } = this.state;
    const submitDisabled = !!Object.keys(errors).length || btcValue === 0 || pauseClick;
    disableSell = disableSell || !balances.get(currencies.CBC.code);

    return (
      <Modal className="cb-CBCExchangeModal" {...props}>
        <ModalHeader>
          CBC Tokens
        </ModalHeader>
        <ModalContent>
          <form
            autoComplete="off"
            ref={(el) => {
              this.form = el;
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <InputGroup label="Amount, CBC*">
              <input
                className="cb-Input"
                placeholder="Amount, CBC"
                type="number"
                name="amount"
                min={1}
                max={3000000}
                step="any"
                required
                value={cbcValue}
                onInput={this.onAmountChange}
                error={errors.amount}
              />
            </InputGroup>
            <div className="exchange-buttons">
              <div className={classNames('exchange-button', 'exchange-button--buy', { 'exchange-button--disabled': submitDisabled })} onClick={!submitDisabled ? this.submitBuy : null}>
                <div>
                  <div>BUY</div>
                  <div>1 CBC = 0.0005 BTC</div>
                  <div>Will take:</div>
                  <div>
                    {btcValue}
                    {' '}
                    BTC
                  </div>
                </div>
              </div>
              <div className={classNames('exchange-button', 'exchange-button--sell', { 'exchange-button--disabled': submitDisabled || disableSell })} onClick={submitDisabled || disableSell ? null : this.submitSell} onMouseEnter={this.sellMouseEnter} onMouseLeave={this.sellMouseLeave}>
                {!sellHovered
                  ? (
                    <div>
                      <div>SELL</div>
                    </div>
                  )
                  : (
                    <span>
                      Sell at the following exchanges
                      <br />
                      after the ICO
                    </span>
                  )}
              </div>
            </div>
          </form>
        </ModalContent>
        <ModalActions>
          <button className="cb-Button" onClick={props.onClose}>Cancel</button>
        </ModalActions>
      </Modal>
    );
  }
}

CBCExchangeModal.propTypes = {
  disableSell: PropTypes.bool,
  currencies: PropTypes.shape({
    CBC: PropTypes.shape({ code: PropTypes.string }),
  }),
  balances: PropTypes.instanceOf(Map),
  onExchange: PropTypes.func,
};

CBCExchangeModal.defaultProps = {
  currencies: {},
  balances: new Map(),
};

export default CBCExchangeModal;
