import React from 'react';
declare type Styles<T> = ((props: T) => Array<any>) | string | {
    [key: string]: any;
};
export declare function styled<T>(styles: Styles<T>): React.FunctionComponent<React.ComponentProps<'div'> & T>;
export declare function styled<Props, T extends React.ElementType>(Component: T, styles: Styles<React.ComponentProps<T> & Props>): React.FunctionComponent<React.ComponentProps<T> & Props>;
export {};
