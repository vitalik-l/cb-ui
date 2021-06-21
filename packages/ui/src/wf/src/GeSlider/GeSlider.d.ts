/// <reference types="react" />
export declare const GeSlider: import("react").FunctionComponent<{
    component?: "span" | undefined;
    color?: "primary" | undefined;
    classes?: ({
        color_primary?: string | undefined;
    } & {
        thumbColor_primary?: string | undefined;
    } & {
        root?: string | undefined;
        wrap?: string | undefined;
        trackFalse?: string | undefined;
        trackInverted?: string | undefined;
        vertical?: string | undefined;
        disabled?: string | undefined;
        rail?: string | undefined;
        track?: string | undefined;
        marked?: string | undefined;
        mark?: string | undefined;
        markActive?: string | undefined;
        markLabel?: string | undefined;
        markLabelActive?: string | undefined;
        valueLabel?: string | undefined;
        thumb?: string | undefined;
        thumbFocus?: string | undefined;
        thumbActive?: string | undefined;
    }) | undefined;
    disabled?: boolean | undefined;
    getAriaLabel?: ((index: number) => string) | undefined;
    getAriaValueText?: ((value: number, index: number) => string) | undefined;
    marks?: false | {
        value: number;
        label?: import("react").ReactNode;
    }[] | undefined;
    min?: number | undefined;
    max?: number | undefined;
    name?: string | undefined;
    step?: number | undefined;
    ThumbComponent?: import("react").ElementType<any> | undefined;
    ValueLabelComponent?: import("react").ElementType<any> | undefined;
    onChange?: ((event: import("react").SyntheticEvent<Element, Event>, value: number | number[]) => void) | undefined;
    onChangeCommitted?: ((event: import("react").SyntheticEvent<Element, Event>, value: number | number[]) => void) | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    scale?: ((value: number) => number) | undefined;
    track?: false | "normal" | "inverted" | undefined;
    value?: number | number[] | undefined;
    valueLabelDisplay?: "on" | "off" | "auto" | undefined;
    valueLabelFormat?: string | ((value: number, index: number) => import("react").ReactNode) | undefined;
} & import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & import("react").RefAttributes<unknown> & {
    children?: import("react").ReactNode;
}>;
