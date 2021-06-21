import React from 'react';
declare type ClassesType = {
    root?: string;
    grouped?: string;
    selected?: string;
    disabled?: string;
};
export declare type ButtonGroupProps = {
    className?: string;
    color?: string;
    variant?: string;
    children?: React.ReactNode;
    onChange?: (value: any) => void;
    value?: any;
    disabled?: boolean;
    classes?: ClassesType;
    cloneProps?: boolean;
    autoValue?: boolean;
} & Omit<React.ComponentProps<'div'>, 'onChange'>;
export declare const ButtonGroup: (props: ButtonGroupProps) => JSX.Element;
export {};
