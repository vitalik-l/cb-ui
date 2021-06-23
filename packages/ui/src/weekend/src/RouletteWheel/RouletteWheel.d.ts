import React from 'react';
declare type Props = {
    className?: string;
    slots?: 'redblack' | 'nozero';
    classes?: any;
    value?: number;
    onWheelStop?: any;
    visibleZone: [from: number, to: number];
    onResult?: any;
    children?: React.ReactNode;
    disableBorder?: boolean;
};
export declare const RouletteWheel: {
    (props: Props): JSX.Element;
    defaultProps: {
        slots: string;
        visibleZone: number[];
    };
};
export {};
