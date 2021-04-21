import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function GameCard(props) {
  const { suit, value, className } = props;

  return (
    <div className={classNames('cb-GameCard', className)}>
      <span className="back" />
      <span className={`face ${suit}`}>
        <dt>{value}</dt>
        <b />
        <dt>{value}</dt>
      </span>
    </div>
  );
}

GameCard.propTypes = {
  suit: PropTypes.oneOf(['hearts', 'diamonds', 'clubs', 'spades']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default GameCard;
