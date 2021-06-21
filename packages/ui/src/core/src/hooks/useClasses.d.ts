declare type Props = {
    classes?: any;
    classNamePrefix?: string;
};
export declare const useClassesByPrefix: <T>(values: T, props: Props) => {
    [key: string]: any;
    root: string;
} & T;
export declare const useClasses: <T = {}>(defaultStyles?: {} | undefined, classesProp?: T | undefined) => T;
export {};
