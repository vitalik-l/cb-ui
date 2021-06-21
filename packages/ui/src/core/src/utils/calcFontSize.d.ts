export declare type CalcFontSizeParams = {
    baseWidth?: number;
    baseHeight?: number;
    viewportWidth?: number;
    viewportHeight?: number;
    baseFontSize?: number;
    maxFontSize?: number;
    minFontSize?: number;
};
export declare const calcFontSize: (params: CalcFontSizeParams) => number;
