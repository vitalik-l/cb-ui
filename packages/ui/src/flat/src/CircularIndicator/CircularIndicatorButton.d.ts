import React from 'react';
declare type Props = {
    className?: string;
    children?: React.ReactNode;
    color?: 'red' | 'green' | 'black';
    theme?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const CircularIndicatorButton: {
    (props: Props): JSX.Element;
    defaultProps: {
        color: string;
        theme: {
            black: {
                offset: number;
                stopColor: string;
            }[];
            green: {
                offset: number;
                stopColor: string;
            }[];
            red: {
                offset: number;
                stopColor: string;
            }[];
        };
    };
};
export {};
