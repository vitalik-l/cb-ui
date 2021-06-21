import React from 'react';
declare type ClassesProp = {
    root?: string;
    label?: string;
    content?: string;
};
declare type Props = {
    className?: string;
    label?: React.ReactNode;
    children?: React.ReactNode;
    classes?: ClassesProp;
};
export declare const InfoPanelItem: (props: Props) => JSX.Element;
export {};
