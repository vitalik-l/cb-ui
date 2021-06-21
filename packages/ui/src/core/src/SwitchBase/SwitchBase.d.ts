import React from 'react';
declare type Props = {
    classes?: {
        root?: string;
        checked?: string;
        disabled?: string;
        input?: string;
        label?: string;
    };
    LabelComponent?: React.ElementType;
    inputRef?: any;
    checkedIcon?: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const SwitchBase: (props: Props) => JSX.Element;
export {};
