import React from 'react';
declare type ClassesType = {
    root?: string;
    disabled?: string;
    invalid?: string;
    fullWidth?: string;
    select?: string;
    icon?: string;
    [key: string]: any;
};
export declare const Select: (props: {
    className?: string | undefined;
    invalid?: boolean | undefined;
    fullWidth?: boolean | undefined;
    input?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    classes?: ClassesType | undefined;
} & React.SelectHTMLAttributes<HTMLSelectElement> & React.RefAttributes<unknown>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
