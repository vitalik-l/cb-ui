import React from 'react';
declare type ClassesType = {
    root?: string;
    disabled?: string;
    label?: string;
    selected?: string;
};
export declare const ButtonBase: <T extends React.ElementType<any>>(props: {
    component?: T | undefined;
    href?: string | undefined;
    selected?: boolean | undefined;
    classes?: ClassesType | undefined;
    clickSound?: false | (() => void) | undefined;
    tabIndex?: number | null | undefined;
} & Omit<React.ComponentPropsWithRef<T>, "tabIndex"> & React.RefAttributes<unknown>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
