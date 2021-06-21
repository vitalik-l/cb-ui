import * as React from 'react';
export declare function teardown(doc: any): void;
export declare const useIsFocusVisible: () => {
    isFocusVisibleRef: React.MutableRefObject<boolean>;
    onFocus: (event: any) => boolean;
    onBlur: (event: any) => boolean;
    ref: (node: any) => void;
};
