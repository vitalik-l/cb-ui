import React from 'react';
declare module "react" {
    function forwardRef<T, P = {}>(render: (props: P, ref: React.Ref<T>) => React.ReactElement | null): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
declare type Colors = 'primary';
declare type Classes<T extends Colors = Colors> = {
    [key in `color_${T}`]?: string;
} & {
    [key in `thumbColor_${T}`]?: string;
} & {
    root?: string;
    wrap?: string;
    trackFalse?: string;
    trackInverted?: string;
    vertical?: string;
    disabled?: string;
    rail?: string;
    track?: string;
    marked?: string;
    mark?: string;
    markActive?: string;
    markLabel?: string;
    markLabelActive?: string;
    valueLabel?: string;
    thumb?: string;
    thumbFocus?: string;
    thumbActive?: string;
};
declare type Mark = {
    value: number;
    label?: React.ReactNode;
};
export declare type SliderProps<T extends Colors = Colors, C extends React.ElementType = 'span'> = {
    component?: C;
    color?: T;
    classes?: Classes<T>;
    disabled?: boolean;
    getAriaLabel?: (index: number) => string;
    getAriaValueText?: (value: number, index: number) => string;
    marks?: false | Mark[];
    min?: number;
    max?: number;
    name?: string;
    step?: number;
    ThumbComponent?: React.ElementType;
    ValueLabelComponent?: React.ElementType;
    onChange?: (event: React.SyntheticEvent, value: number | number[]) => void;
    /**
     * Callback function that is fired when the `mouseup` is triggered.
     *
     * @param {object} event The event source of the callback. **Warning**: This is a generic event not a change event.
     * @param {number | number[]} value The new value.
     */
    onChangeCommitted?: (event: React.SyntheticEvent, value: number | number[]) => void;
    /**
     * The component orientation.
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * A transformation function, to change the scale of the slider.
     * @default (x) => x
     */
    scale?: (value: number) => number;
    /**
     * The track presentation:
     *
     * - `normal` the track will render a bar representing the slider value.
     * - `inverted` the track will render a bar representing the remaining slider value.
     * - `false` the track will render without a bar.
     * @default 'normal'
     */
    track?: 'normal' | false | 'inverted';
    /**
     * The value of the slider.
     * For ranged sliders, provide an array with two values.
     */
    value?: number | number[];
    /**
     * Controls when the value label is displayed:
     *
     * - `auto` the value label will display when the thumb is hovered or focused.
     * - `on` will display persistently.
     * - `off` will never display.
     * @default 'off'
     */
    valueLabelDisplay?: 'on' | 'auto' | 'off';
    /**
     * The format function the value label's value.
     *
     * When a function is provided, it should have the following signature:
     *
     * - {number} value The value label's value to format
     * - {number} index The value label's index to format
     * @default (x) => x
     */
    valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode);
} & React.ComponentProps<C>;
export declare const Slider: (props: {
    component?: "span" | undefined;
    color?: "primary" | undefined;
    classes?: Classes<"primary"> | undefined;
    disabled?: boolean | undefined;
    getAriaLabel?: ((index: number) => string) | undefined;
    getAriaValueText?: ((value: number, index: number) => string) | undefined;
    marks?: false | Mark[] | undefined;
    min?: number | undefined;
    max?: number | undefined;
    name?: string | undefined;
    step?: number | undefined;
    ThumbComponent?: React.ElementType<any> | undefined;
    ValueLabelComponent?: React.ElementType<any> | undefined;
    onChange?: ((event: React.SyntheticEvent, value: number | number[]) => void) | undefined;
    /**
     * Callback function that is fired when the `mouseup` is triggered.
     *
     * @param {object} event The event source of the callback. **Warning**: This is a generic event not a change event.
     * @param {number | number[]} value The new value.
     */
    onChangeCommitted?: ((event: React.SyntheticEvent, value: number | number[]) => void) | undefined;
    /**
     * The component orientation.
     * @default 'horizontal'
     */
    orientation?: "horizontal" | "vertical" | undefined;
    /**
     * A transformation function, to change the scale of the slider.
     * @default (x) => x
     */
    scale?: ((value: number) => number) | undefined;
    /**
     * The track presentation:
     *
     * - `normal` the track will render a bar representing the slider value.
     * - `inverted` the track will render a bar representing the remaining slider value.
     * - `false` the track will render without a bar.
     * @default 'normal'
     */
    track?: false | "normal" | "inverted" | undefined;
    /**
     * The value of the slider.
     * For ranged sliders, provide an array with two values.
     */
    value?: number | number[] | undefined;
    /**
     * Controls when the value label is displayed:
     *
     * - `auto` the value label will display when the thumb is hovered or focused.
     * - `on` will display persistently.
     * - `off` will never display.
     * @default 'off'
     */
    valueLabelDisplay?: "auto" | "on" | "off" | undefined;
    /**
     * The format function the value label's value.
     *
     * When a function is provided, it should have the following signature:
     *
     * - {number} value The value label's value to format
     * - {number} index The value label's index to format
     * @default (x) => x
     */
    valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode) | undefined;
} & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<unknown>) => React.ReactElement | null;
export {};
