export declare type MinMax = {
    min?: number;
    max?: number;
};
export declare type CalcViewportParams = {
    horizontal?: MinMax;
    vertical?: MinMax;
    windowHeight: number;
    windowWidth: number;
} & MinMax;
export declare const calcViewport: ({ windowWidth, windowHeight, min, max, horizontal, vertical, }: CalcViewportParams) => number[];
