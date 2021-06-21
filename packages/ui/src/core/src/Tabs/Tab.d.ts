import React from 'react';
declare type ClassesType = {
    root?: string;
    selected?: string;
    label?: string;
    [key: string]: any;
};
export declare type TabProps = {
    selected?: boolean;
    color?: string;
    onChange?: (value: any) => void;
    variant?: string;
    value?: any;
    className?: string;
    label?: React.ReactNode;
    onClick?: any;
    classes?: ClassesType;
};
export declare const Tab: (props: TabProps) => JSX.Element;
export {};
