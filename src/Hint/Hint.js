import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import InfoIcon from '../Icons/InfoIcon';

function Hint({
  show, text, className, arrowSide, arrowAlign, title, ...props
}) {
  return (
    <Tooltip
      className={classNames('cb-Hint', className, { [`cb-Hint--arrow-side-${arrowSide}`]: arrowSide, [`cb-Hint--arrow-align-${arrowAlign}`]: arrowAlign })}
      show={show}
      {...props}
    >
      <div className="cb-Hint-container">
        <div className="cb-Hint-arrow" />
        <div className="cb-Hint-arrow-border" />
        <InfoIcon />
        <div className="cb-Hint-content">
          <div className="cb-Hint-content__title">{title}</div>
          <div className="cb-Hint-content__text">{text}</div>
        </div>
      </div>
    </Tooltip>
  );
}

Hint.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  arrowSide: PropTypes.bool,
  arrowAlign: PropTypes.string,
  title: PropTypes.string,
};

export default Hint;
