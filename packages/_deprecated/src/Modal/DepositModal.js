import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qr from 'qr-encode';
import classNames from 'classnames';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import Tooltip from '../Tooltip';

function generateQRCode(address) {
  return qr(address, { type: 6, size: 4, level: 'Q' });
}

class DepositModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'BTC',
      // dunno why
      copied: false,
    };
  }

  componentDidMount() {
    const { getDepositAddress } = this.props;
    const { currency } = this.state;
    if (currency && getDepositAddress) {
      getDepositAddress(currency);
    }
  }

  onCurrencyChange = ({ target }) => {
    const { getDepositAddress, funCurrencyCode } = this.props;
    this.setState({ currency: target.value }, () => {
      if (target.value !== funCurrencyCode && getDepositAddress) {
        getDepositAddress(target.value);
      }
    });
  };

  copyTarget = () => {
    const inp = this.paymentAddress;
    if (inp && inp.select) {
      inp.select();
      try {
        document.execCommand('copy');
        inp.blur();
        // target.classList.add('copied');
        Tooltip.show(this.copyButton);
      } catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }
    }
  };

  render() {
    const { currency } = this.state;
    const { depositAddress, currencies, funCurrencyCode, onFunTopUp, disableFunTopUp } = this.props;
    const QRCode = generateQRCode(depositAddress);
    let content;

    if (currency === funCurrencyCode) {
      content = (
        <p>
          <div>
            {currencies.find((i) => i.code === funCurrencyCode).title} balance should reach 50
            before you can top up your account
          </div>
          <p>
            <button
              className="cb-Button primary"
              onClick={!disableFunTopUp ? onFunTopUp : null}
              disabled={disableFunTopUp}
            >
              TOP UP
            </button>
          </p>
        </p>
      );
    } else {
      content = (
        <>
          <fieldset>
            <label className="fieldset__label">
              This code contains your personal payment address.
            </label>
            <div className="payment-address-field">
              <input
                type="text"
                required
                name="paymentAddress"
                value={depositAddress}
                readOnly
                ref={(el) => {
                  this.paymentAddress = el;
                }}
                className="cb-Input"
              />
              <button
                className="cb-Button"
                onClick={this.copyTarget}
                data-tooltip="Copied"
                data-tooltip-timeout="0"
                ref={(el) => {
                  this.copyButton = el;
                }}
              >
                Copy
              </button>
            </div>
          </fieldset>
          <fieldset>
            <div className="qr-code">
              <img alt="" className={classNames({ invisible: !depositAddress })} src={QRCode} />
            </div>
            <p className="note">
              Please note: You may receive your funds in parts over 3 confirmations.
              <br />
              {/* eslint-disable-next-line max-len */}
              Recommendation: when selecting a transfer fee, a higher fee guarantees confirmation
              within 10 minutes. A lower fee may take an hour or more to confirm.
            </p>
          </fieldset>
        </>
      );
    }

    return (
      <>
        <ModalHeader>Deposit</ModalHeader>
        <ModalContent>
          <table className="property-inputs">
            <tbody>
              <tr>
                <td>Currency:</td>
                <td>
                  <select
                    className="cb-Input"
                    name="currency"
                    onChange={this.onCurrencyChange}
                    value={currency}
                  >
                    <option value="" disabled>
                      Select currency
                    </option>
                    {currencies.map((cur) => (
                      <option value={cur.code} key={cur.code}>
                        {cur.title}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          {content}
        </ModalContent>
      </>
    );
  }
}

DepositModalContent.propTypes = {
  getDepositAddress: PropTypes.func,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  funCurrencyCode: PropTypes.string,
  depositAddress: PropTypes.string,
  onFunTopUp: PropTypes.func,
  disableFunTopUp: PropTypes.func,
};

DepositModalContent.defaultProps = {
  currencies: [
    {
      code: 'BTC',
      title: 'Bitcoin',
    },
  ],
  funCurrencyCode: 'FGLT',
};

export default function DepositModal(props) {
  return (
    <Modal className="cb-DepositModal" {...props}>
      <DepositModalContent {...props} />
    </Modal>
  );
}
