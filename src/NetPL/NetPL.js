import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressButton from '../ProgressButton';
import Dropdown from '../Dropdown';

export default class NetPL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: props.currency.code,
      targetElement: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currency.code !== this.props.currency.code) {
      if (nextProps.value.some((item) => item[this.props.currencyField] === nextProps.currency.code)) {
        this.setState({
          selectedCurrency: nextProps.currency.code,
        });
      }
    }
  }

    displayCurrencyMenu = (e) => {
      this.setState({ targetElement: e.target }, () => {
        this.props.onDisplayCurrencyMenu && this.props.onDisplayCurrencyMenu();
      });
    };

    closeCurrencyMenu = () => {
      this.setState({ targetElement: null }, () => {
        this.props.onCloseCurrencyMenu && this.props.onCloseCurrencyMenu();
      });
    };

    onCurrencyChange = (currency) => {
      this.setState({ selectedCurrency: currency });
      this.closeCurrencyMenu();
    };

    render() {
      const {
        value, requestEarlyExitAll, profitRenderer, profitField, progressField, currencyField,
      } = this.props;

      if (!value || !value.length) return null;

      const { selectedCurrency, targetElement } = this.state;
      const selectedValue = value.find((item) => item.currency === selectedCurrency) || value[0];
      const profit = selectedValue[profitField];
      const progress = selectedValue[progressField];

      return (
        <div className={classNames('cb-net-pl', { loss: profit < 0 })}>
          <div>
            <span className={classNames({ 'cb-net-pl__link': value.length > 1 })} onClick={this.displayCurrencyMenu}>
              NET P/L
              {value.length > 1 ? `, ${selectedCurrency} ` : ' '}
            </span>
            {value.length > 1
              ? (
                <Dropdown
                  value={selectedCurrency}
                  options={value.map((item) => ({ id: item[currencyField], label: item[currencyField] }))}
                  onChange={this.onCurrencyChange}
                  element={targetElement}
                  show={!!targetElement}
                  onClose={this.closeCurrencyMenu}
                  display="top"
                />
              )
              : null}
            <b>
              {profitRenderer ? React.createElement(profitRenderer, { profit: selectedValue[profitField], currency: selectedValue[currencyField] }) : selectedValue[profitField]}
            </b>
          </div>
          {progress
            ? (
              <ProgressButton
                loss={profit < 0}
                label="early exit all"
                progress={Math.abs(progress)}
                onClick={requestEarlyExitAll}
              />
            )
            : <button onClick={requestEarlyExitAll}>early exit all</button>}
          {progress ? (
            <span className="cb-net-pl__progress-value">
              {progress > 0 ? `+${progress}` : progress}
              <span className="percent">%</span>
            </span>
          ) : null}
        </div>
      );
    }
}

NetPL.propTypes = {
  currency: PropTypes.shape({code: PropTypes.string}),
  onDisplayCurrencyMenu: PropTypes.func,
  onCloseCurrencyMenu: PropTypes.func,
  value: PropTypes.array,
  profitField: PropTypes.string,
  progressField: PropTypes.string,
  currencyField: PropTypes.string,
  requestEarlyExitAll: PropTypes.func,
};

NetPL.defaultProps = {
  profitField: 'profit',
  progressField: 'profitToPayoutRatio',
  currencyField: 'currency',
  currency: {},
};
