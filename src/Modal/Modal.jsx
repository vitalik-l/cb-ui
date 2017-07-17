import React from 'react';
import Animate from 'rc-animate';

export default function Modal(props) {
    const {children, open} = props;
    return (
        <Animate transitionName="modal" transitionAppear>
            {open ?
                <div className="overlay">
                    <div className="modal-wrapper">
                        <div className="modal">
                            {children}
                        </div>
                    </div>
                </div>
            : null}
        </Animate>
    );
}