import React from 'react';
import { ViewportProps } from '@cb-general/core/Viewport';
declare type Props = ViewportProps & {
    className?: string;
    header?: React.ReactElement;
    ticker?: React.ReactElement;
    chartControls?: React.ReactElement;
    chart?: React.ReactElement;
    tradingControls?: React.ReactElement;
    tabs?: React.ReactElement;
    children?: React.ReactNode;
};
export declare const DesktopLayout: {
    (props: Props): JSX.Element;
    defaultProps: {
        baseHeight: number;
        baseWidth: number;
        maxRatio: number;
        minRatio: number;
    };
};
export {};
