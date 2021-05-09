import { createPortal } from 'react-dom';
import React from 'react';
import clsx from 'clsx';
import Animate from 'rc-animate';

// local files
import { useClasses } from '../hooks/useClasses';
import styles from './CoreModal.module.scss';

type ClassesType = {
  root?: string;
  overlay?: string;
  wrapper?: string;
  fixed?: string;
};

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
  classes?: ClassesType;
  fixed?: boolean;
};

const onModalClick = (event: any) => {
  event.preventDefault();
  event.stopPropagation();
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
    transitionName = styles.root,
    transitionEnter,
    transitionLeave,
    classes: classesProp,
    fixed = true,
  } = props;
  let animatedModal = null;
  const classes: ClassesType = useClasses(styles, classesProp);

  const modal = open ? (
    <div
      className={clsx(classes.overlay, overlayClassName, fixed && classes.fixed)}
      onClick={onOverlayClick}
    >
      <div className={classes.wrapper}>
        <div
          className={clsx(classes.root, className)}
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
