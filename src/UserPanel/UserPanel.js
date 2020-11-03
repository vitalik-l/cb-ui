import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CurrenciesPanel from './CurrenciesPanel';

class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCurrencyMenu: false,
    };
  }

  onCurrencyEnter = () => {
    this.setState({
      displayCurrencyMenu: true,
    });
  };

  onCurrencyLeave = () => {
    this.setState({
      displayCurrencyMenu: false,
    });
  };

  render() {
    const {
      className,
      userName,
      onDepositClick,
      onWithdrawClick,
      onMyAccountClick,
      tokensLabel,
      onTokensClick,
      balance,
      balanceRenderer,
      convertedBalance,
      convertedBalanceRenderer,
      onLogin,
      onRegister,
      currencies,
      currencyRenderer,
      onSelectCurrency,
      selectedCurrency,
    } = this.props;
    const { displayCurrencyMenu } = this.state;

    return (
      <div
        className={classNames('cb-UserPanel', className, {
          'cb-UserPanel--logged-in': userName,
          'cb-UserPanel--currency-visible': displayCurrencyMenu,
        })}
      >
        {!userName ? (
          <div>
            <i className="icon icon--sign-in" />
            &nbsp;
            <span
              className="link"
              onClick={onLogin}
              role="button"
              tabIndex="0"
              onKeyDown={() => {}}
            >
              Login
            </span>
            {onRegister ? <span>&nbsp;|&nbsp;</span> : null}
            {onRegister ? (
              <span
                className="link"
                onClick={onRegister}
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
              >
                Register
              </span>
            ) : null}
          </div>
        ) : (
          [
            <div key={1} className="cb-UserPanel__links">
              <i className="icon icon--sign-in" />
              &nbsp;
              <span
                className="link"
                onClick={onTokensClick}
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
              >
                {tokensLabel}
              </span>
              &nbsp;|&nbsp;
              <span
                className="link"
                onClick={onDepositClick}
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
              >
                Deposit
              </span>
              &nbsp;|&nbsp;
              <span
                className="link"
                onClick={onWithdrawClick}
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
              >
                Withdraw
              </span>
            </div>,
            <div key={2}>
              <div
                className="link selected-color"
                onClick={onMyAccountClick}
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
              >
                {userName}
              </div>
              <div
                className="cb-UserPanel__balance"
                onMouseEnter={this.onCurrencyEnter}
                onMouseLeave={this.onCurrencyLeave}
              >
                <table>
                  <tbody>
                    <tr>
                      <td>BALANCE:</td>
                      <td>
                        <span
                          className={classNames('user-balance user-balance--active', {
                            up: balance > 0,
                            down: balance < 0,
                          })}
                        >
                          {balanceRenderer ? balanceRenderer(balance) : balance}
                        </span>
                        <CurrenciesPanel
                          visible={displayCurrencyMenu}
                          currencies={currencies}
                          onSelectCurrency={onSelectCurrency}
                          currencyRenderer={currencyRenderer}
                          selectedCurrency={selectedCurrency}
                        />
                      </td>
                    </tr>
                    <tr style={{ display: !convertedBalance ? 'none' : 'block' }}>
                      <td>USD:</td>
                      <td>{convertedBalanceRenderer}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>,
          ]
        )}
      </div>
    );
  }
}

UserPanel.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string,
  tokensLabel: PropTypes.string,
  onDepositClick: PropTypes.func,
  onWithdrawClick: PropTypes.func,
  onMyAccountClick: PropTypes.func,
  onTokensClick: PropTypes.func,
  onRegister: PropTypes.func,
  onLogin: PropTypes.func,
  balance: PropTypes.number,
  balanceRenderer: PropTypes.func,
  convertedBalance: PropTypes.number,
  convertedBalanceRenderer: PropTypes.node,
  currencies: PropTypes.arrayOf(PropTypes.object),
  currencyRenderer: PropTypes.func,
  selectedCurrency: PropTypes.string,
  onSelectCurrency: PropTypes.func,
};

UserPanel.defaultProps = {
  tokensLabel: 'GLT Tokens',
};

export default UserPanel;
