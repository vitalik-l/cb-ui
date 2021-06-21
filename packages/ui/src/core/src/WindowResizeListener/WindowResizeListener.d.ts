import React from 'react';
declare type Props = {
    timeout: number;
    children: React.ReactNode;
};
export declare const WindowResizeListener: {
    ({ timeout, children }: Props): JSX.Element;
    defaultProps: {
        timeout: number;
        children: undefined;
    };
};
export {};
