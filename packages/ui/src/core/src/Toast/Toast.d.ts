import React from 'react';
declare type ClassesType = {
    root?: string;
    content?: string;
    [key: string]: any;
};
declare type Props = {
    className?: string;
    children?: React.ReactNode;
    text?: string;
    color?: 'default' | 'success' | 'danger' | 'warning' | 'info';
    placementX?: 'left' | 'center' | 'right';
    placementY?: 'top' | 'bottom' | 'center';
    classes?: ClassesType;
    transitionName?: string;
} & React.ComponentProps<'div'>;
export declare const Toast: {
    (props: Props): JSX.Element;
    defaultProps: {
        placementX: string;
        placementY: string;
    };
};
export {};
