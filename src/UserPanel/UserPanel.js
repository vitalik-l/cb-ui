import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CurrenciesPanel from './CurrenciesPanel';

export default class UserPanel extends Component {
    static propTypes = {
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
        balanceRenderer: PropTypes.any,
        convertedBalance: PropTypes.number,
        convertedBalanceRenderer: PropTypes.any,
        currencies: PropTypes.array,
        currencyRenderer: PropTypes.func,
        selectedCurrency: PropTypes.string,
        onSelectCurrency: PropTypes.func
    };

    static defaultProps = {
        tokensLabel: 'GLT Tokens'
    };

    state = {
      displayCurrencyMenu: false
    };

    onCurrencyEnter = e => {
        this.setState({
            displayCurrencyMenu: true
        });
    };

    onCurrencyLeave = e => {
        this.setState({
            displayCurrencyMenu: false
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
            selectedCurrency
        } = this.props;
        const {displayCurrencyMenu} = this.state;

        return (
            <div className={classNames('cb-UserPanel', className, {'cb-UserPanel--logged-in': userName, 'cb-UserPanel--currency-visible': displayCurrencyMenu})}>
                {!userName ?
                    <div>
                        <i className="icon icon--sign-in"/>&nbsp;
                        <span className="link" onClick={onLogin}>Login</span>
                        &nbsp;|&nbsp;
                        <span className="link" onClick={onRegister}>Register</span>
                    </div>
                    :
                    [
                        <div key={1} className="cb-UserPanel__links">
                            <i className="icon icon--sign-in"/>&nbsp;
                            <span className="link" onClick={onTokensClick}>{tokensLabel}</span>
                            &nbsp;|&nbsp;
                            <span className="link" onClick={onDepositClick}>Deposit</span>
                            &nbsp;|&nbsp;
                            <span className="link" onClick={onWithdrawClick}>Withdraw</span>
                        </div>,
                        <div key={2}>
                            <div className="link selected-color" onClick={onMyAccountClick}>
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
                                        <td>
                                            BALANCE:
                                        </td>
                                        <td>
                                            <span
                                                className={classNames('user-balance user-balance--active', {
                                                    'up': balance > 0,
                                                    'down': balance < 0
                                                })}
                                            >
                                                {balanceRenderer ? balanceRenderer(balance) : balance}
                                            </span>
                                            {<CurrenciesPanel
                                                visible={displayCurrencyMenu}
                                                currencies={currencies}
                                                onSelectCurrency={onSelectCurrency}
                                                currencyRenderer={currencyRenderer}
                                                selectedCurrency={selectedCurrency}
                                            />}
                                        </td>
                                    </tr>
                                    <tr style={{display: !convertedBalance ? 'none' : 'block'}}>
                                        <td>USD:</td>
                                        <td>{convertedBalanceRenderer}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ]
                }
            </div>
        )
    }
}