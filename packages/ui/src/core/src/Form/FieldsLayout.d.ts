import React from 'react';
export declare type FieldsLayoutProps = {
    type?: 'inline' | 'stacked' | 'default';
    children?: React.ReactNode;
    classes?: {
        root?: string;
        type_inline?: string;
        type_stacked?: string;
        type_default?: string;
        [key: string]: any;
    };
};
export declare const FieldsLayout: (props: FieldsLayoutProps) => JSX.Element;
