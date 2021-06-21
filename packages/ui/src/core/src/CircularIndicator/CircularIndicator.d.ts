import React from 'react';
declare type ClassesType = {
    root?: string;
    content?: string;
    reverse?: string;
    [key: string]: any;
};
declare type Props = {
    className?: string;
    reverse?: boolean;
    children?: React.ReactNode;
    progress?: number;
    animDuration?: number;
    classes?: ClassesType;
    gradientUp?: string;
    gradientDown?: string;
};
export declare const CircularIndicator: (props: Props) => JSX.Element;
export {};
