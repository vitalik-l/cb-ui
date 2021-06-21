import React from 'react';
import { FieldProps } from 'react-final-form';
declare type LayoutClassName = `layout_${'inline' | 'stacked'}`;
declare type ClassesType = {
    [key in LayoutClassName]?: string;
} & {
    inline?: string;
    item?: string;
    label?: string;
    subLabel?: string;
    control?: string;
    fullWidth?: string;
    error?: string;
    root?: string;
};
declare type Props<T extends React.ElementType = React.ElementType> = FieldProps<any, any> & {
    Label?: React.ElementType;
    Error?: React.ElementType;
    label?: React.ReactNode;
    subLabel?: React.ReactNode;
    placeholder?: string;
    name: string;
    component?: T;
    inputProps?: React.ComponentProps<T>;
    error?: React.ReactNode;
    id?: string;
    fullWidth?: boolean;
    showError?: boolean;
    className?: string;
    classes?: ClassesType;
    inputClasses?: any;
    layout?: string;
};
export declare const FormField: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export {};
