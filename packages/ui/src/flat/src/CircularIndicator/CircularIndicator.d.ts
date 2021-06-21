import React from 'react';
declare type Props = {
    className?: string;
    reverse?: boolean;
    children?: React.ReactNode;
    progress?: number;
    animDuration?: number;
    theme?: any;
};
export declare const CircularIndicator: {
    (props: Props): JSX.Element;
    defaultProps: {
        theme: {
            background: ({
                stopColor: string;
                offset?: undefined;
            } | {
                offset: number;
                stopColor: string;
            })[];
            progress: {
                greenStart: {
                    offset: number;
                    stopColor: string;
                }[];
                greenEnd: ({
                    stopColor: string;
                    offset?: undefined;
                } | {
                    offset: string;
                    stopColor: string;
                })[];
                redStart: {
                    offset: number;
                    stopColor: string;
                }[];
                redEnd: ({
                    stopColor: string;
                    offset?: undefined;
                } | {
                    offset: number;
                    stopColor: string;
                })[];
            };
        };
    };
};
export {};
