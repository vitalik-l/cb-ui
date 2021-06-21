import React from 'react';
import 'cb-datatable/styles/core.scss';
declare type ClassesType = {
    root?: string;
    table?: string;
};
export declare type TableProps = {
    className?: string;
    rowsPerPage?: number;
    data?: any;
    sortable?: boolean;
    sortBy?: Array<{
        id: string;
        desc?: boolean;
    }>;
    children?: React.ReactNode;
    pager?: any;
    stickyHeader?: boolean;
    row?: any;
    header?: any;
    classes?: ClassesType;
};
export declare const Table: {
    (props: TableProps): JSX.Element;
    defaultProps: {
        sortable: boolean;
        pager: JSX.Element;
    };
};
export {};
