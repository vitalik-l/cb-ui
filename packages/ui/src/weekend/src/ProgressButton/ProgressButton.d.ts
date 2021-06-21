/// <reference types="react" />
declare type Props = {
    className?: string;
    disabled?: boolean;
    color?: 'red' | 'green';
    label?: string;
    progress?: number;
};
export declare const ProgressButton: {
    (props: Props): JSX.Element;
    defaultProps: {
        color: string;
    };
};
export {};
