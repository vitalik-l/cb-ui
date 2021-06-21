import React from 'react';
import { FormProps } from 'react-final-form';
export declare const Form: (props: {
    className?: string | undefined;
    layout?: "default" | "inline" | "stacked" | undefined;
    children?: any;
    fullWidth?: boolean | undefined;
} & FormProps<Record<string, any>, Partial<Record<string, any>>> & React.RefAttributes<unknown>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
