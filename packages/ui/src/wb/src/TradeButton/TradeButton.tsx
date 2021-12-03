import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { styled } from '@cb-general/core/utils/styled';
import styles from './WbTradeButton.module.scss';

type TradeButtonVariant = 'up' | 'down';

export const TradeButton = styled<
  { variant?: TradeButtonVariant; classes?: { [key in TradeButtonVariant]?: string } },
  typeof ButtonBase
>(
  ({ className, variant, classes, ...props }) => (
    <ButtonBase
      className={clsx(className, !!variant && classes?.[variant])}
      classes={classes}
      {...props}
    />
  ),
  styles,
);
