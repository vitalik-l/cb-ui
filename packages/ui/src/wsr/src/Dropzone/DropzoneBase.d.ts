import React from 'react';
import { BetObject } from './types';
declare type ClassesType = {
    root?: string;
    selected?: string;
    label?: string;
    winner?: string;
    winnerNumber?: string;
    hover?: string;
};
export declare const DropzoneBase: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<{
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
} & Omit<any, "tabIndex"> & React.RefAttributes<unknown> & {
    winner?: boolean | undefined;
    winnerNumber?: boolean | undefined;
    label?: string | undefined;
    classes?: ClassesType | undefined;
    withHover?: boolean | undefined;
} & BetObject, string | number | symbol> & React.RefAttributes<unknown>>>;
export {};
