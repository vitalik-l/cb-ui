import React from 'react';
import { ButtonGroup } from '@cb-general/core/ButtonGroup';
declare type Props = React.ComponentProps<typeof ButtonGroup> & {
    label?: string;
    value?: 1 | 3 | 6 | 9;
    reversed?: boolean;
};
export declare const GameRounds: {
    (props: Props): JSX.Element;
    defaultProps: {
        value: number;
    };
};
export {};
