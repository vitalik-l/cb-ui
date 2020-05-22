import React from 'react';
import Animate from 'rc-animate';
import CloseIcon from '../Icons/CloseIcon';
import classNames from 'classnames';

function onModalClick(e) {
    e.preventDefault();
    e.stopPropagation();
}

export default function Modal(props) {
    const {children, open, overlayClassName, className, displayCloseButton, onClose, onOverlayClick} = props;
    return (
        <Animate transitionName="modal" transitionAppear>
            {open ?
                <div className={classNames('cb-Modal-overlay', overlayClassName)} onClick={onOverlayClick}>
                    <div className="cb-Modal-wrapper">
                        <div className={classNames('cb-Modal', className)} onclick={onModalClick}>
                            {children}
                            {displayCloseButton ?
                                <div className="cb-Modal__close" onClick={onClose}>
                                    <CloseIcon />
                                </div>
                            : null}
                        </div>
                    </div>
                </div>
            : null}
        </Animate>
    );
}