import React from 'react';
export declare const ButtonBaseContext: React.Context<Partial<{
    component?: React.ElementType<any> | undefined;
    href?: string | undefined;
    selected?: boolean | undefined;
    classes?: {
        root?: string | undefined;
        disabled?: string | undefined;
        label?: string | undefined;
        selected?: string | undefined;
    } | undefined;
    clickSound?: false | (() => void) | undefined;
    tabIndex?: number | null | undefined;
} & Omit<any, "tabIndex"> & React.RefAttributes<unknown>>>;
export declare const useButtonBase: () => Partial<{
    component?: React.ElementType<any> | undefined;
    href?: string | undefined;
    selected?: boolean | undefined;
    classes?: {
        root?: string | undefined;
        disabled?: string | undefined;
        label?: string | undefined;
        selected?: string | undefined;
    } | undefined;
    clickSound?: false | (() => void) | undefined;
    tabIndex?: number | null | undefined;
} & Omit<any, "tabIndex"> & React.RefAttributes<unknown>>;
export declare const ButtonBaseProvider: ({ children, ...restProps }: any) => JSX.Element;
