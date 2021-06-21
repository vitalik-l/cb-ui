import React from 'react';
declare type Props = {
    className?: string;
    children?: React.ReactNode;
    color?: 'default' | 'green' | 'red';
    active?: boolean;
    classes?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const TradeButton: {
    (props: Props): JSX.Element;
    defaultProps: {
        active: boolean;
    };
};
export {};
