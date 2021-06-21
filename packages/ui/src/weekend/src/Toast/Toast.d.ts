import React from 'react';
declare type Props = {
    className?: string;
    children?: React.ReactNode;
    text?: string;
    color?: 'default' | 'orange';
    placementX?: 'left' | 'center' | 'right';
    placementY?: 'top' | 'bottom' | 'center';
};
export declare const Toast: {
    (props: Props): JSX.Element;
    defaultProps: {
        placementX: string;
        placementY: string;
    };
};
export {};
