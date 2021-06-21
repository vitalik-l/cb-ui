export declare const useThrottle: (fn: (...args: any) => any, timeout?: number) => (...args: any[]) => any;
export declare const useThrottleWithState: (fn: (...args: any) => any, timeout?: number) => (boolean | ((...args: any[]) => any))[];
