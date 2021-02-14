import { createPortal } from 'react-dom';
import React from 'react';
import clsx from 'clsx';
import Animate from 'rc-animate';

// local files
import styles from '../styles/classes.module.scss';
import './Modal.scss';

export type ModalProps = {
  className?: string;
  children?: React.ReactNode;
  onOverlayClick?: any;
  overlayClassName?: string;
  open?: boolean;
  portalTarget?: Element;
  animate?: boolean;
  transitionName?: string;
  transitionEnter?: boolean;
  transitionLeave?: boolean;
};

const onModalClick = (event: any) => {
  event.preventDefault();
  event.stopPropagation();
};

const classes = {
  modal: styles.Modal,
  overlay: `${styles.Modal}-overlay`,
  wrapper: `${styles.Modal}-wrapper`,
};

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    onOverlayClick,
    overlayClassName,
    open,
    portalTarget,
    animate = true,
    transitionName = classes.modal,
    transitionEnter,
    transitionLeave,
  } = props;
  let animatedModal = null;

  const modal = open ? (
    <div className={clsx(classes.overlay, overlayClassName)} onClick={onOverlayClick}>
      <div className={classes.wrapper}>
        <div
          className={clsx(classes.modal, className)}
          onClick={onOverlayClick ? onModalClick : undefined}
        >
          {children}
        </div>
      </div>
    </div>
  ) : null;

  if (animate) {
    animatedModal = (
      <Animate
        transitionName={transitionName}
        transitionEnter={transitionEnter}
        transitionLeave={transitionLeave}
        transitionAppear={transitionEnter}
      >
        {modal}
      </Animate>
    );
  }

  const content = animatedModal || modal;

  if (portalTarget) {
    return createPortal(content, portalTarget);
  }

  return content;
};

Modal.defaultProps = {
  transitionEnter: true,
  transitionLeave: true,
  animate: true,
};
