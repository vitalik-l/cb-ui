import { CalcViewportParams } from '../utils/calcViewport';
export declare const useViewportByRatio: ({ min, max, horizontal, vertical, timeout, }: {
    timeout?: number | undefined;
} & Omit<CalcViewportParams, "windowWidth" | "windowHeight">) => number[];
