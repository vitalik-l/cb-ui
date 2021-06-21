import React from 'react';
declare type ClassesType = {
    root?: string;
    arrowLeft?: any;
    arrowRight?: any;
};
declare type Props = {
    className?: string;
    onClose?: any;
    right?: boolean;
    classes?: ClassesType;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const PopoverPanel: {
    (props: Props): JSX.Element;
    defaultProps: {
        classes: any;
    };
};
export {};
