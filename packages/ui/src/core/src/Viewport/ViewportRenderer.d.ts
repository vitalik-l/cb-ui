import React from 'react';
export declare type ViewportRendererProps = {
    children?: React.ReactNode;
    breakpoint?: (width: number, height: number) => number | false | true | undefined;
    width?: number;
    height?: number;
    baseFontSize?: number;
    baseWidth?: number;
    baseHeight?: number;
    maxFontSize?: number;
    minFontSize?: number;
    className?: string;
    animate?: boolean;
    fixed?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const ViewportRenderer: (props: ViewportRendererProps) => JSX.Element | null;
