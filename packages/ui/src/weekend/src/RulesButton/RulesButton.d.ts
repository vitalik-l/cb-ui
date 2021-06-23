/// <reference types="react" />
export declare const RulesButton: import("react").FunctionComponent<{
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
} & Omit<any, "tabIndex"> & import("react").RefAttributes<unknown>>;
