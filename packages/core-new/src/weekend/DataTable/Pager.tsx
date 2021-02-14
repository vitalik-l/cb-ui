import React from 'react';

// local files
import { Button } from '../Button';
import { Select } from '../Select';
import dataTableStyles from './DataTable.module.scss';

export const pagerStrings = {
  next: 'next',
  previous: 'previous',
};

export const Pager = (props: any) => {
  const { rowsPerPage, page, dataSize, setPage, strings: stringsProp } = props;
  const pagesCount = React.useMemo(() => Math.ceil(dataSize / rowsPerPage), [
    dataSize,
    rowsPerPage,
  ]);
  const pages = React.useMemo(() => Array.from(new Array(pagesCount), (_, index) => index + 1), [
    pagesCount,
  ]);
  const strings: typeof pagerStrings = React.useMemo(() => {
    if (typeof stringsProp === 'object') {
      return { ...pagerStrings, ...strings };
    }
    return pagerStrings;
  }, [stringsProp]);

  const goToPage = React.useCallback(
    (page) => {
      if (setPage) setPage(+page);
    },
    [setPage],
  );

  if (!pagesCount) return null;

  const goToNext = () => {
    goToPage(page + 1);
  };

  const toToPrev = () => {
    goToPage(page - 1);
  };

  const selectPageHandler = (event: any) => {
    event.preventDefault();
    goToPage(event.target.value);
  };

  const styles: any = {
    previous: {
      visibility: page === 1 ? 'hidden' : 'initial',
    },
    next: {
      visibility: pagesCount === 1 || pagesCount - page === 0 ? 'hidden' : 'initial',
    },
  };

  return (
    <div className={dataTableStyles.Pager}>
      <Button
        className={`${dataTableStyles.Pager}__previous`}
        style={styles.previous}
        onClick={toToPrev}
        square
      >
        {strings.previous}
      </Button>
      <div>
        <Select onChange={selectPageHandler} value={page}>
          {pages.map((pageNumber) => (
            <option value={pageNumber} key={pageNumber}>
              {pageNumber}
            </option>
          ))}
        </Select>
        <span> / {pagesCount}</span>
      </div>
      <Button
        className={`${dataTableStyles.Pager}__next`}
        style={styles.next}
        onClick={goToNext}
        square
      >
        {strings.next}
      </Button>
    </div>
  );
};
