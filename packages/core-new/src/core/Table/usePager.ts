import React from 'react';

type Props = {
  rowsPerPage: number;
  page: number;
  dataSize: number;
  setPage?: any;
};

export const usePager = (props: Props) => {
  const { rowsPerPage, page, dataSize, setPage } = props;

  const pagesCount = React.useMemo(() => Math.ceil(dataSize / rowsPerPage), [
    dataSize,
    rowsPerPage,
  ]);

  const pages = React.useMemo(() => Array.from(new Array(pagesCount), (_, index) => index + 1), [
    pagesCount,
  ]);

  const goToPage = React.useCallback(
    (page) => {
      if (setPage) setPage(+page);
    },
    [setPage],
  );

  const goToNext = React.useCallback(() => {
    goToPage(page + 1);
  }, [page, goToPage]);

  const goToPrev = React.useCallback(() => {
    goToPage(page - 1);
  }, [page, goToPage]);

  const onSelect = React.useCallback(
    (event: any) => {
      event.preventDefault();
      goToPage(event.target.value);
    },
    [goToPage],
  );

  const styles = {
    previous: {
      visibility: page === 1 ? 'hidden' : 'initial',
    },
    next: {
      visibility: pagesCount === 1 || pagesCount - page === 0 ? 'hidden' : 'initial',
    },
  };

  return {
    pagesCount,
    pages,
    onSelect,
    styles,
    goToNext,
    goToPrev,
  };
};
