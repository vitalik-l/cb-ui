import React from 'react';
import Animate from 'rc-animate';
import classNames from 'classnames';

export default function Modal(props) {
    const {children, open, overlayClassName, className} = props;
    return (
        <Animate transitionName="modal" transitionAppear>
            {open ?
                <div className={classNames('overlay', overlayClassName)}>
                    <div className="modal-wrapper">
                        <div className={classNames('modal', className)}>
                            {children}
                        </div>
                    </div>
                </div>
            : null}
        </Animate>
    );
}