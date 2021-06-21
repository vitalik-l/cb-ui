import React from 'react';
declare type ClassesType = {
    root?: string;
    scrollButton?: string;
    scroller?: string;
};
export declare type TabsProps = {
    className?: string;
    children?: React.ReactNode;
    value?: any;
    onChange?: (value: any) => void;
    color?: string;
    variant?: string;
    classes?: ClassesType;
    scrollButtons?: 'on' | 'off';
    scrollLeftIcon?: React.ReactNode;
    scrollRightIcon?: React.ReactNode;
};
export declare const Tabs: React.FC<TabsProps>;
export {};
