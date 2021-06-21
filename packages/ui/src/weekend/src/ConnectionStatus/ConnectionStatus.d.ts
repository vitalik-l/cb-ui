/// <reference types="react" />
declare type ClassesType = {
    root?: string;
    icon?: string;
    iconOnline?: string;
    labelLeft?: string;
    labelRight?: string;
    [key: string]: any;
};
declare type Props = {
    className?: string;
    online?: boolean;
    labelLeft?: string;
    labelRight?: string;
    classes?: ClassesType;
};
export declare const ConnectionStatus: (props: Props) => JSX.Element;
export {};
