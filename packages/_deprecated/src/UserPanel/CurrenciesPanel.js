import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CurrenciesPanel(props) {
  const { currencies, selectedCurrency, onSelectCurrency, currencyRenderer, visible } = props;

  return (
    <div className={classNames('cb-CurrenciesPanel', { 'cb-CurrenciesPanel--visible': visible })}>
      <table>
        <tbody>
          {currencies.map((currency) => {
            const selected = currency.code === selectedCurrency;
            return (
              <tr
                className={classNames({ selected })}
                onClick={
                  !selected && onSelectCurrency ? () => onSelectCurrency(currency.code) : null
                }
                key={currency.code}
              >
                <td>{selected ? <span>&#10003;</span> : null}</td>
                <td>{currency.title}</td>
                <td>{currencyRenderer(currency.code)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

CurrenciesPanel.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  selectedCurrency: PropTypes.string,
  onSelectCurrency: PropTypes.func,
  currencyRenderer: PropTypes.func,
  visible: PropTypes.bool,
};

CurrenciesPanel.defaultProps = {
  currencies: [],
  currencyRenderer: (currency) => currency,
};

export default CurrenciesPanel;
