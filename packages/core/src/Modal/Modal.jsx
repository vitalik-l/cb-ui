import React from 'react';
import PropTypes from 'prop-types';
import Animate from 'rc-animate';
import classNames from 'classnames';
import CloseIcon from '../Icons/CloseIcon';

function onModalClick(e) {
  e.preventDefault();
  e.stopPropagation();
}

function Modal(props) {
  const {
    children,
    open,
    overlayClassName,
    className,
    displayCloseButton,
    onClose,
    onOverlayClick,
    transitionEnter,
    transitionLeave,
  } = props;
  return (
    <Animate
      transitionName="modal"
      transitionAppear
      transitionEnter={transitionEnter}
      transitionLeave={transitionLeave}
    >
      {open ? (
        <div className={classNames('cb-Modal-overlay', overlayClassName)} onClick={onOverlayClick}>
          <div className="cb-Modal-wrapper">
            <div
              className={classNames('cb-Modal', className)}
              onClick={onOverlayClick ? onModalClick : null}
            >
              {children}
              {displayCloseButton ? (
                <div className="cb-Modal__close" onClick={onClose}>
                  <CloseIcon />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </Animate>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  overlayClassName: PropTypes.string,
  displayCloseButton: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  onOverlayClick: PropTypes.func,
  transitionEnter: PropTypes.bool,
  transitionLeave: PropTypes.bool,
};

Modal.defaultProps = {
  transitionEnter: true,
  transitionLeave: true,
};

export default Modal;
