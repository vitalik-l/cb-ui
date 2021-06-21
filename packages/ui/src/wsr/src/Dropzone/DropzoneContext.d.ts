import React from 'react';
import { BetObject } from './types';
export declare const DropzoneContext: React.Context<{
    selectedNumbers: Array<number>;
    selectNumbers: (params?: BetObject | undefined) => void;
}>;
