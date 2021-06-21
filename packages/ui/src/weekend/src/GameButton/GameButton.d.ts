import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
declare type Color = 'primary' | 'default' | 'green';
declare type ColorClassName = `color_${Color}`;
declare type Classes = {
    [key in ColorClassName]: string;
} & {
    root?: string;
    large?: string;
    unclickable?: string;
    sublabelAlignTop?: string;
    sublabel?: string;
    label?: string;
};
declare type Props = React.ComponentProps<typeof ButtonBase> & {
    color?: Color;
    sublabel?: string;
    unclickable?: boolean;
    sublabelAlignTop?: boolean;
    large?: boolean;
    classes?: Classes;
};
export declare const GameButton: {
    (props: Props): JSX.Element;
    defaultProps: {
        color: string;
    };
};
export {};
