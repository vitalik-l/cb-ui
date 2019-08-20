import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CurrenciesPanel(props) {
    const {currencies, selectedCurrency, onSelectCurrency, currencyRenderer} = props;

    return (
        <div className="cb-CurrenciesPanel">
            <table>
                {currencies.map(currency => {
                    const selected = currency === selectedCurrency;
                    return (
                        <tr
                            className={classNames({selected})}
                            onClick={!selected && onSelectCurrency ? () => onSelectCurrency(currency) : null}
                        >
                            <td>
                                {selected ? <span>&#10003;</span> : null}
                            </td>
                            <td>
                                {currency}
                            </td>
                            <td>
                                {currencyRenderer(currency)}
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

CurrenciesPanel.propTypes = {
    currencies: PropTypes.array,
    selectedCurrency: PropTypes.string,
    onSelectCurrency: PropTypes.func,
    currencyRenderer: PropTypes.func
};

CurrenciesPanel.defaultProps = {
    currencies: [],
    currencyRenderer: currency => currency
};

export default CurrenciesPanel;