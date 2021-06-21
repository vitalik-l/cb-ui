import React from 'react';
import { ViewportProps } from '@cb-general/core/Viewport';
declare type Props = ViewportProps & {
    className?: string;
    header?: React.ReactNode;
    chart?: React.ReactNode;
    controls?: React.ReactNode;
    children?: React.ReactNode;
};
export declare const AppLayout: {
    (props: Props): JSX.Element;
    defaultProps: {
        baseHeight: number;
        baseWidth: number;
        maxRatio: number;
        minRatio: number;
    };
};
export {};
