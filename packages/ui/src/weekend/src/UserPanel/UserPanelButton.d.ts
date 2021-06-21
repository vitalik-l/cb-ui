import React from 'react';
declare type Props = React.ComponentProps<'button'> & {
    component?: React.ElementType;
    className?: string;
    cropLeft?: boolean;
    children?: React.ReactNode;
};
export declare const UserPanelButton: {
    (props: Props): JSX.Element;
    defaultProps: {
        component: (props: any) => JSX.Element;
    };
};
export {};
