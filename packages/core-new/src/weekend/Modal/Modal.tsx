import React from 'react';
import clsx from 'clsx';
import { Modal as CoreModal, ModalProps } from '@cb-general/core/Modal';

// local files
import classes from '../styles/classes.module.scss';
import './Modal.scss';

export const Modal = (props: ModalProps) => {
  const { className, ...otherProps } = props;

  return <CoreModal className={clsx(classes.Modal, className)} {...otherProps} />;
};

Modal.defaultProps = {
  transitionEnter: true,
  transitionLeave: true,
  animate: true,
};
