declare type Props = {
    rowsPerPage: number;
    page: number;
    dataSize: number;
    setPage?: any;
};
export declare const usePager: (props: Props) => {
    pagesCount: number;
    pages: number[];
    onSelect: (event: any) => void;
    styles: {
        previous: {
            visibility: string;
        };
        next: {
            visibility: string;
        };
    };
    goToNext: () => void;
    goToPrev: () => void;
};
export {};
