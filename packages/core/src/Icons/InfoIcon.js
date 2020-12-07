import './styles/InfoIcon.scss';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function InfoIcon({ className, ...props }) {
  return <div className={classNames('cb-InfoIcon', className)} {...props} />;
}

InfoIcon.propTypes = {
  className: PropTypes.string,
};

export default InfoIcon;
