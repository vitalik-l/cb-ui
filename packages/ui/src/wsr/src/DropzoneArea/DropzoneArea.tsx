import React from 'react';
import clsx from 'clsx';

// local files
import styles from './DropzoneArea.module.scss';

type Props = React.ComponentProps<'div'> & {
  DropzoneComponent?: React.ElementType;
  side?: 'left' | 'right';
};

enum BetOnEnum {
  /*A*/ STRAIGHT,
  /*B*/ SPLIT,
  /*C*/ STREET,
  /*D*/ CORNER,
  /*E*/ BASKET, // not playing in the zeroless version
  /*F*/ LINE,
  /*G*/ COLUMN,
  /*H*/ DOZEN,
  /*I*/ REDBLACK,
  /*J*/ ODDEVEN,
  /*K*/ LOWHIGH,
}

type DropzoneItemType = {
  betOn: BetOnEnum;
  startNumber: number;
  style: any;
  typeBSide?: number;
};

const dropzoneItems: { left: Array<DropzoneItemType>; right: Array<DropzoneItemType> } = {
  left: [
    { betOn: BetOnEnum.STRAIGHT, startNumber: 0, style: { left: 27, top: 0 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 1, style: { left: 56, top: 161 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 2, style: { left: 56, top: 81 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 3, style: { left: 56, top: 1 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 4, style: { left: 126, top: 161 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 5, style: { left: 126, top: 81 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 6, style: { left: 126, top: 1 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 7, style: { left: 196, top: 161 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 8, style: { left: 196, top: 81 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 9, style: { left: 196, top: 1 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 10, style: { left: 266, top: 161 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 11, style: { left: 266, top: 81 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 12, style: { left: 266, top: 1 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 13, style: { left: 336, top: 161 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 14, style: { left: 336, top: 81 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 15, style: { left: 336, top: 1 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 16, style: { left: 406, top: 161 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 17, style: { left: 406, top: 81 } },
    { betOn: BetOnEnum.STRAIGHT, startNumber: 18, style: { left: 406, top: 1 } },

    { betOn: BetOnEnum.SPLIT, startNumber: 1, typeBSide: 3, style: { left: 119, top: 163 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 2, typeBSide: 3, style: { left: 119, top: 83 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 3, typeBSide: 3, style: { left: 119, top: 3 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 4, typeBSide: 3, style: { left: 189, top: 163 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 5, typeBSide: 3, style: { left: 189, top: 83 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 6, typeBSide: 3, style: { left: 189, top: 3 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 7, typeBSide: 3, style: { left: 260, top: 163 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 8, typeBSide: 3, style: { left: 260, top: 83 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 9, typeBSide: 3, style: { left: 260, top: 3 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 10, typeBSide: 3, style: { left: 330, top: 163 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 11, typeBSide: 3, style: { left: 330, top: 83 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 12, typeBSide: 3, style: { left: 330, top: 3 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 13, typeBSide: 3, style: { left: 400, top: 163 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 14, typeBSide: 3, style: { left: 400, top: 83 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 15, typeBSide: 3, style: { left: 400, top: 3 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 16, typeBSide: 3, style: { left: 470, top: 163 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 17, typeBSide: 3, style: { left: 470, top: 83 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 18, typeBSide: 3, style: { left: 470, top: 3 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 1, typeBSide: 1, style: { left: 58, top: 156 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 2, typeBSide: 1, style: { left: 58, top: 76 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 4, typeBSide: 1, style: { left: 128, top: 156 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 5, typeBSide: 1, style: { left: 128, top: 76 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 7, typeBSide: 1, style: { left: 198, top: 156 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 8, typeBSide: 1, style: { left: 198, top: 76 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 10, typeBSide: 1, style: { left: 268, top: 156 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 11, typeBSide: 1, style: { left: 268, top: 76 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 13, typeBSide: 1, style: { left: 338, top: 156 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 14, typeBSide: 1, style: { left: 338, top: 76 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 16, typeBSide: 1, style: { left: 408, top: 156 } },
    { betOn: BetOnEnum.SPLIT, startNumber: 17, typeBSide: 1, style: { left: 408, top: 76 } },

    { betOn: BetOnEnum.DOZEN, startNumber: 1, style: { left: 56, top: 242 } },
    { betOn: BetOnEnum.DOZEN, startNumber: 13, style: { left: 338, top: 242 } },

    { betOn: BetOnEnum.LOWHIGH, startNumber: 1, style: { left: 56, top: 315 } },

    { betOn: BetOnEnum.ODDEVEN, startNumber: 2, style: { left: 196, top: 315 } },

    { betOn: BetOnEnum.REDBLACK, startNumber: 1, style: { left: 336, top: 315 } },

    { betOn: BetOnEnum.STREET, startNumber: 1, style: { left: 83, top: -6 } },
    { betOn: BetOnEnum.STREET, startNumber: 4, style: { left: 153, top: -6 } },
    { betOn: BetOnEnum.STREET, startNumber: 7, style: { left: 223, top: -6 } },
    { betOn: BetOnEnum.STREET, startNumber: 10, style: { left: 293, top: -6 } },
    { betOn: BetOnEnum.STREET, startNumber: 13, style: { left: 363, top: -6 } },
    { betOn: BetOnEnum.STREET, startNumber: 16, style: { left: 433, top: -6 } },

    { betOn: BetOnEnum.CORNER, startNumber: 1, style: { left: 117, top: 153 } },
    { betOn: BetOnEnum.CORNER, startNumber: 4, style: { left: 187, top: 153 } },
    { betOn: BetOnEnum.CORNER, startNumber: 7, style: { left: 257, top: 153 } },
    { betOn: BetOnEnum.CORNER, startNumber: 10, style: { left: 327, top: 153 } },
    { betOn: BetOnEnum.CORNER, startNumber: 13, style: { left: 397, top: 153 } },
    { betOn: BetOnEnum.CORNER, startNumber: 16, style: { left: 467, top: 153 } },
    { betOn: BetOnEnum.CORNER, startNumber: 2, style: { left: 117, top: 73 } },
    { betOn: BetOnEnum.CORNER, startNumber: 5, style: { left: 187, top: 73 } },
    { betOn: BetOnEnum.CORNER, startNumber: 8, style: { left: 257, top: 73 } },
    { betOn: BetOnEnum.CORNER, startNumber: 11, style: { left: 327, top: 73 } },
    { betOn: BetOnEnum.CORNER, startNumber: 14, style: { left: 397, top: 73 } },
    { betOn: BetOnEnum.CORNER, startNumber: 17, style: { left: 467, top: 73 } },

    { betOn: BetOnEnum.BASKET, startNumber: 0, style: { left: 47, top: 233 } },

    { betOn: BetOnEnum.LINE, startNumber: 1, style: { left: 117, top: -6 } },
    { betOn: BetOnEnum.LINE, startNumber: 4, style: { left: 187, top: -6 } },
    { betOn: BetOnEnum.LINE, startNumber: 7, style: { left: 257, top: -6 } },
    { betOn: BetOnEnum.LINE, startNumber: 10, style: { left: 327, top: -6 } },
    { betOn: BetOnEnum.LINE, startNumber: 13, style: { left: 397, top: -6 } },
    { betOn: BetOnEnum.LINE, startNumber: 16, style: { left: 467, top: -6 } },
  ],
  right: [],
};

const Dropzone = () => {
  return <div />;
};

export const DropzoneArea = (props: Props) => {
  const { className, DropzoneComponent = Dropzone, side = 'left', ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      {dropzoneItems[side].map((item) => (
        <DropzoneComponent {...item} />
      ))}
    </div>
  );
};
