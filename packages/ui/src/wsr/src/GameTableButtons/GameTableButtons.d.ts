/// <reference types="react" />
export declare const GameTableButtons: import("react").FunctionComponent<{
    className?: string | undefined;
    color?: string | undefined;
    variant?: string | undefined;
    children?: import("react").ReactNode;
    onChange?: ((value: any) => void) | undefined;
    value?: any;
    disabled?: boolean | undefined;
    classes?: {
        root?: string | undefined;
        grouped?: string | undefined;
        selected?: string | undefined;
        disabled?: string | undefined;
    } | undefined;
    cloneProps?: boolean | undefined;
    autoValue?: boolean | undefined;
} & Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onChange"> & {
    children?: import("react").ReactNode;
}>;
