import React from 'react';
declare type ClassesType = {
    root?: string;
    arrow_top?: string;
    arrow_bottom?: string;
    arrow_left?: string;
    arrow_right?: string;
    [key: string]: any;
};
declare type Props = React.ComponentProps<'div'> & {
    arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
    classes?: ClassesType;
};
export declare const InfoPanel: React.FC<Props>;
export {};
