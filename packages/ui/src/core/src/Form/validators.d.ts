export declare const composeValidators: (...validators: Array<any>) => (value: any) => any;
export declare const validator: (fn: any, message: string) => (value: any) => string | undefined;
export declare const validateEmail: (email: string) => boolean;
export declare const regexp: (regexpValue: RegExp) => (value: any) => boolean;
export declare const required: (value: any) => boolean;
export declare const minLength: (length: number) => (value: any) => boolean;
export declare const maxLength: (length: number) => (value: any) => boolean;
export declare const max: (maxNumber: number) => (value: any) => boolean;
export declare const min: (minNumber: number) => (value: any) => boolean;
