import React from 'react';
declare type Props = {
    className?: string;
    children?: React.ReactNode;
    color?: 'red' | 'green' | 'orange';
    classes?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const CircularIndicatorButton: (props: Props) => JSX.Element;
export {};
