import React from 'react';
import Animate from 'rc-animate';
import CloseIcon from '../Icons/CloseIcon';
import classNames from 'classnames';

export default function Modal(props) {
    const {children, open, overlayClassName, className, displayCloseButton, onClose} = props;
    return (
        <Animate transitionName="modal" transitionAppear>
            {open ?
                <div className={classNames('cb-Modal-overlay', overlayClassName)}>
                    <div className="cb-Modal-wrapper">
                        <div className={classNames('cb-Modal', className)}>
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