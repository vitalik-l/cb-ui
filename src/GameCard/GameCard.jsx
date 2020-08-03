import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GameCard extends PureComponent {
  render() {
    const { suit, value, className } = this.props;
    return (
      <div className={className || 'cb-GameCard'}>
        <span className="back" />
        <span className={`face ${suit}`}>
          <dt>{value}</dt>
          <b />
          <dt>{value}</dt>
        </span>
      </div>
    );
  }
}

GameCard.propTypes = {
  suit: PropTypes.oneOf(['hearts', 'diamonds', 'clubs', 'spades']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default GameCard;
