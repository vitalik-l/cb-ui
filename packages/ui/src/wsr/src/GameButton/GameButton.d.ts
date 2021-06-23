/// <reference types="react" />
export declare const GameButton: import("react").FunctionComponent<{
    component?: import("react").ElementType<any> | undefined;
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
    disabled?: boolean | undefined;
} & Omit<any, "tabIndex"> & import("react").RefAttributes<unknown> & {
    color?: ("default" | "green" | "primary") | undefined;
    sublabel?: string | undefined;
    unclickable?: boolean | undefined;
    sublabelAlignTop?: boolean | undefined;
    large?: boolean | undefined;
    classes?: ({
        color_default: string;
        color_green: string;
        color_primary: string;
    } & {
        root?: string | undefined;
        large?: string | undefined;
        unclickable?: string | undefined;
        sublabelAlignTop?: string | undefined;
        sublabel?: string | undefined;
        label?: string | undefined;
    }) | undefined;
}>;
