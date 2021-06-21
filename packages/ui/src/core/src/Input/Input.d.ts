import React from 'react';
declare type ClassesType = {
    root?: string;
    input?: string;
    fullWidth?: string;
    invalid?: string;
    withButton?: string;
    button?: string;
};
export declare type InputProps = {
    inputRef?: React.RefObject<HTMLInputElement>;
    placeholder?: string;
    invalid?: boolean;
    component?: any;
    className?: string;
    fullWidth?: boolean;
    classes?: ClassesType;
    button?: React.ReactElement;
    multiline?: boolean;
    numeric?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const Input: React.FC<InputProps>;
export {};
