import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './GameCard.scss';

type Props = {
  className?: string;
  suit?: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value?: string | number;
};

export const GameCard = (props: Props) => {
  const { className, suit, value, ...restProps } = props;

  return (
    <div className={clsx(classes.GameCard, className)} {...restProps}>
      <div className={`${classes.GameCard}__back`} />
      <div
        className={clsx(`${classes.GameCard}-face`, {
          [`${classes.GameCard}-face_suit_${suit}`]: !!suit,
        })}
      >
        <span className={`${classes.GameCard}-face__value`}>{value}</span>
        <span className={`${classes.GameCard}-face__center`} />
        <span className={`${classes.GameCard}-face__value`}>{value}</span>
      </div>
    </div>
  );
};
