import React from 'react';
export declare const ChipsStack: (props: React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    offsetTop?: number | undefined;
    offsetLeft?: number | undefined;
    animate?: "target" | "none" | "fadeOut" | undefined;
    animationDelay?: number | undefined;
    onAnimationEnd?: any;
    onAnimationStart?: any;
    label?: string | undefined;
} & React.RefAttributes<unknown>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
