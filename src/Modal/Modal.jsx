import React from 'react';
import Animate from 'rc-animate';
import CloseIcon from '../Icons/CloseIcon';
import classNames from 'classnames';

function onModalClick(e) {
    e.preventDefault();
    e.stopPropagation();
}

export default function Modal(props) {
    const {
    	children,
		open,
		overlayClassName,
		className,
		displayCloseButton,
		onClose,
		onOverlayClick,
		transitionEnter,
		transitionLeave
    } = props;
    return (
        <Animate
			transitionName="modal"
			transitionAppear
			transitionEnter={typeof transitionEnter === 'boolean' ? transitionEnter : true}
			transitionLeave={typeof transitionLeave === 'boolean' ? transitionLeave : true}
		>
            {open ?
                <div className={classNames('cb-Modal-overlay', overlayClassName)} onClick={onOverlayClick}>
                    <div className="cb-Modal-wrapper">
                        <div className={classNames('cb-Modal', className)} onClick={onOverlayClick ? onModalClick : null}>
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
