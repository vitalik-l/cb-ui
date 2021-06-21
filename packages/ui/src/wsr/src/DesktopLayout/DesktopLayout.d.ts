import React from 'react';
import { ViewportProps } from '@cb-general/core/Viewport';
declare type Props = ViewportProps & {
    header?: React.ReactElement;
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
