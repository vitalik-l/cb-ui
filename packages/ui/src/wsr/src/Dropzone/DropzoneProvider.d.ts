import React from 'react';
import { BetObject } from './types';
declare type Props = {
    children?: React.ReactNode;
    getBetNumbersFn?: (params: BetObject) => Array<number>;
};
export declare const DropzoneProvider: (props: Props) => JSX.Element;
export {};
