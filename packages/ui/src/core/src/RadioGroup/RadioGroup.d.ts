import React from 'react';
declare type ClassesType = {
    root?: string;
    child?: string;
    inline?: string;
    stacked?: string;
};
export declare type RadioGroupProps = {
    className?: string;
    children?: React.ReactNode;
    onChange?: (value: any) => void;
    value?: any;
    disabled?: boolean;
    name?: string;
    layout?: false | 'inline' | 'stacked';
    classes?: ClassesType;
};
export declare const RadioGroup: {
    (props: RadioGroupProps): JSX.Element;
    defaultProps: {
        layout: string;
    };
};
export {};
