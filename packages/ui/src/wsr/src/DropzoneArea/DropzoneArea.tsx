import React from 'react';
import clsx from 'clsx';

// local files
import { Dropzone } from '../Dropzone';
import { BET_TYPES } from '../constants';
import styles from './DropzoneArea.module.scss';

type Props = React.ComponentProps<'div'> & {
  DropzoneComponent?: React.ElementType;
  rightSide?: boolean;
};

const STRAIGHT_NUMBERS = {
  left: [3, 6, 9, 12, 15, 18, 2, 5, 8, 11, 14, 17, 1, 4, 7, 10, 13, 16],
  right: [21, 24, 27, 30, 33, 36, 20, 23, 26, 29, 32, 35, 19, 22, 25, 28, 31, 34],
};

export const DropzoneArea = (props: Props) => {
  const { className, DropzoneComponent, rightSide, ...restProps } = props;
  let content;

  const renderDropzone = (props: React.ComponentProps<typeof Dropzone>) => {
    return <Dropzone Component={DropzoneComponent} className={styles.dropzone} {...props} />;
  };

  const straightNumbers = STRAIGHT_NUMBERS[rightSide ? 'right' : 'left'];

  const straightItems = straightNumbers.map((startNumber) => (
    <div className={styles.straightItem} key={startNumber}>
      {renderDropzone({ betType: BET_TYPES.STRAIGHT, startNumber })}
      {!~[34, 35, 36].indexOf(startNumber) &&
        renderDropzone({ betType: BET_TYPES.SPLIT, startNumber, typeBSide: 3 })}
      {startNumber % 3 !== 0 ? (
        <React.Fragment>
          {renderDropzone({ betType: BET_TYPES.SPLIT, startNumber, typeBSide: 1 })}
          {renderDropzone({ betType: BET_TYPES.CORNER, startNumber })}
        </React.Fragment>
      ) : (
        renderDropzone({ betType: BET_TYPES.STREET, startNumber: startNumber - 2 })
      )}
    </div>
  ));

  if (rightSide) {
    content = (
      <React.Fragment>
        <div className={styles.straight}>{straightItems}</div>
        <div className={styles.lines}>
          <div className={styles.lineItem}>
            {renderDropzone({ betType: BET_TYPES.COLUMN, startNumber: 3 })}
          </div>
          <div className={styles.lineItem}>
            {renderDropzone({ betType: BET_TYPES.COLUMN, startNumber: 2 })}
          </div>
          <div className={styles.lineItem}>
            {renderDropzone({ betType: BET_TYPES.COLUMN, startNumber: 1 })}
          </div>
        </div>
        <div className={styles.dozen}>
          {renderDropzone({ betType: BET_TYPES.DOZEN, startNumber: 13 })}
          {renderDropzone({ betType: BET_TYPES.DOZEN, startNumber: 25 })}
        </div>
        <div className={styles.hotNumbers}>
          {renderDropzone({ betType: BET_TYPES.REDBLACK, startNumber: 2 })}
          {renderDropzone({ betType: BET_TYPES.ODDEVEN, startNumber: 1 })}
          {renderDropzone({ betType: BET_TYPES.LOWHIGH, startNumber: 19 })}
        </div>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <div className={styles.straight}>
          {renderDropzone({ betType: BET_TYPES.STRAIGHT, startNumber: 0 })}
          {straightItems}
        </div>
        <div className={styles.dozen}>
          {renderDropzone({ betType: BET_TYPES.DOZEN, startNumber: 1 })}
          {renderDropzone({ betType: BET_TYPES.DOZEN, startNumber: 13 })}
        </div>
        <div className={styles.hotNumbers}>
          {renderDropzone({ betType: BET_TYPES.LOWHIGH, startNumber: 1 })}
          {renderDropzone({ betType: BET_TYPES.ODDEVEN, startNumber: 2 })}
          {renderDropzone({ betType: BET_TYPES.REDBLACK, startNumber: 1 })}
        </div>
      </React.Fragment>
    );
  }

  return (
    <div
      className={clsx(styles.root, className, rightSide ? styles.side_right : styles.side_left)}
      {...restProps}
    >
      {content}
    </div>
  );
};
