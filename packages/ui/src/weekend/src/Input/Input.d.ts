/// <reference types="react" />
export declare const Input: import("react").FunctionComponent<{
    inputRef?: import("react").RefObject<HTMLInputElement> | undefined;
    placeholder?: string | undefined;
    invalid?: boolean | undefined;
    component?: any;
    className?: string | undefined;
    fullWidth?: boolean | undefined;
    classes?: {
        root?: string | undefined;
        input?: string | undefined;
        fullWidth?: string | undefined;
        invalid?: string | undefined;
        withButton?: string | undefined;
        button?: string | undefined;
    } | undefined;
    button?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    multiline?: boolean | undefined;
    numeric?: boolean | undefined;
} & import("react").InputHTMLAttributes<HTMLInputElement> & {
    children?: import("react").ReactNode;
}>;
