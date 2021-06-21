import { MinMax } from '../utils/calcViewport';
export declare type CalculatedViewportProps = {
    horizontal?: MinMax;
    vertical?: MinMax;
    minRatio?: number;
    maxRatio?: number;
    timeout?: number;
    children?: (width: number, height: number) => any;
};
export declare const CalculatedViewport: (props: CalculatedViewportProps) => any;
