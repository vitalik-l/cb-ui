import React from 'react';
// local
import styles from './CorePager.module.scss';
import { usePager } from './usePager';
import { useClasses } from '../hooks/useClasses';

export const Pager = (props: any) => {
  const {
    page,
    ButtonComponent = 'button',
    SelectComponent = 'select',
    classes: classesProp,
  } = props;
  const { pagesCount, pages, onSelect, styles: buttonStyles, goToNext, goToPrev } = usePager(props);
  const classes = useClasses(styles, classesProp);

  return (
    <div className={classes.root}>
      <ButtonComponent style={buttonStyles.previous} onClick={goToPrev}>
        Previous
      </ButtonComponent>
      <div className={classes.select}>
        <SelectComponent onChange={onSelect} value={page}>
          {pages.map((pageNumber: number) => (
            <option value={pageNumber} key={pageNumber}>
              {pageNumber}
            </option>
          ))}
        </SelectComponent>
        <span> / {pagesCount}</span>
      </div>
      <ButtonComponent style={buttonStyles.next} onClick={goToNext}>
        Next
      </ButtonComponent>
    </div>
  );
};
