import { EasingFunction } from 'bezier-easing';
declare type AnimateParams = {
    timing?: EasingFunction;
    draw: (progress: number) => void;
    duration: number;
};
export declare const animate: ({ timing, draw, duration, }: AnimateParams) => () => void;
export declare const animateProperty: (property: string, element: any, to: number, options?: any, cb?: any) => () => void;
export {};
