/// <reference types="react" />
declare type Props = {
    className?: string;
    suit?: 'hearts' | 'diamonds' | 'clubs' | 'spades';
    value?: string | number;
};
export declare const GameCard: (props: Props) => JSX.Element;
export {};
