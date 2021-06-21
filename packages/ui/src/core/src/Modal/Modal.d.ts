import React from 'react';
declare type ClassesType = {
    root?: string;
    overlay?: string;
    wrapper?: string;
    fixed?: string;
};
export declare type ModalProps = {
    className?: string;
    children?: React.ReactNode;
    onOverlayClick?: any;
    overlayClassName?: string;
    open?: boolean;
    container?: Element;
    disablePortal?: boolean;
    animate?: boolean;
    transitionName?: string;
    transitionEnter?: boolean;
    transitionLeave?: boolean;
    classes?: ClassesType;
    fixed?: boolean;
};
export declare const Modal: {
    (props: ModalProps): JSX.Element | null;
    defaultProps: {
        transitionEnter: boolean;
        transitionLeave: boolean;
        animate: boolean;
    };
};
export {};
