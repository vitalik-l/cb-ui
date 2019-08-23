import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CurrenciesPanel from './CurrenciesPanel';

export default class UserPanel extends Component {
    static propTypes = {
        className: PropTypes.string,
        userName: PropTypes.string,
        onDepositClick: PropTypes.func,
        onWithdrawClick: PropTypes.func,
        onMyAccountClick: PropTypes.func,
        onCBCtokensClick: PropTypes.func,
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

    render() {
        const {
            className,
            userName,
            onDepositClick,
            onWithdrawClick,
            onMyAccountClick,
            onCBCtokensClick,
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

        return (
            <div className={classNames('cb-UserPanel', className)}>
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
                            <span className="link" onClick={onCBCtokensClick}>CBC Tokens</span>
                            &nbsp;|&nbsp;
                            <span className="link" onClick={onDepositClick}>Deposit</span>
                            &nbsp;|&nbsp;
                            <span className="link" onClick={onWithdrawClick}>Withdraw</span>
                        </div>,
                        <div key={2}>
                            <div className="link selected-color" onClick={onMyAccountClick}>
                                {userName}
                            </div>
                            <div className="cb-UserPanel__balance">
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