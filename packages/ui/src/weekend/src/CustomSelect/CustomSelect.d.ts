/// <reference types="react" />
export declare const CustomSelect: import("react").FunctionComponent<{
    className?: string | undefined;
    invalid?: boolean | undefined;
    fullWidth?: boolean | undefined;
    autoWidth?: boolean | undefined;
    icon?: any;
    format?: any;
    disabled?: boolean | undefined;
    native?: boolean | undefined;
    InputComponent?: import("react").ElementType<any> | undefined;
    inputProps?: any;
    inputRef?: any;
    editable?: boolean | undefined;
    classes?: {
        root?: string | undefined;
        disabled?: string | undefined;
        invalid?: string | undefined;
        fullWidth?: string | undefined;
        autoWidth?: string | undefined;
        value?: string | undefined;
        select?: string | undefined;
        icon?: string | undefined;
        editable?: string | undefined;
        button?: string | undefined;
        inputRoot?: string | undefined;
        input?: string | undefined;
        options?: string | undefined;
        option?: string | undefined;
        selected?: string | undefined;
    } | undefined;
    onToggle?: ((state: boolean) => void) | undefined;
    portalTarget?: any;
    disablePortal?: boolean | undefined;
} & import("react").SelectHTMLAttributes<HTMLSelectElement> & {
    children?: import("react").ReactNode;
}>;
