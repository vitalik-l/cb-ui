import './styles/InfoIcon.scss';
import React from 'react';
import classNames from 'classnames';

function InfoIcon({ className, ...props }) {
  return <div className={classNames('cb-InfoIcon', className)} {...props} />;
}

export default InfoIcon;
