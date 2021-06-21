import React from 'react';
declare type Props<T extends React.ElementType> = {
    Component?: T;
} & React.ComponentProps<T>;
export declare const GameTableButtonsCircular: <T extends React.ElementType<any>>({ Component, className, ...restProps }: Props<T>) => JSX.Element;
export {};
