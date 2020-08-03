import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Ticker(props) {
  const { children, className, horizontal } = props;
  return (
    <div className={classNames('cb-Ticker', { className }, { 'cb-Ticker__horizontal': horizontal })}>
      <div className={classNames('cb-Ticker__scroller', { 'cb-Ticker__horizontal': horizontal })}>
        {children}
      </div>
    </div>
  );
}

Ticker.propTypes = {
  /**
   * List of TickerValue components
   */
  children: PropTypes.node,
  /**
   * Class name, if needed
   */
  className: PropTypes.string,
  /**
   * Horizontal orientation of ticker container.
   */
  horizontal: PropTypes.bool,
};

export default Ticker;
