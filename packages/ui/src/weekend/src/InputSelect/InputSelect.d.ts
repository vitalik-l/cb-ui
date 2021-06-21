import React from 'react';
import { Select } from '../Select';
declare type Props<T extends React.ElementType> = React.ComponentProps<typeof Select> & {
    InputComponent?: T;
    inputProps?: React.ComponentProps<T>;
    disabled?: boolean;
};
export declare const InputSelect: <T extends React.ElementType<any>>(props: Props<T>) => JSX.Element;
export {};
