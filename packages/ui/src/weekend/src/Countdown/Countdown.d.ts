/// <reference types="react" />
declare type ClassesType = {
    root?: string;
    label?: string;
    countdown?: string;
};
declare type Props = {
    className?: string;
    value?: string | number;
    label?: string;
    classes?: ClassesType;
};
export declare const Countdown: (props: Props) => JSX.Element;
export {};
