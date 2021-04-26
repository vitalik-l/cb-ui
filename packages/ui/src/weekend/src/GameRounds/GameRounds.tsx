import React from 'react';
import clsx from 'clsx';
import { ButtonGroup } from '@cb-general/core/ButtonGroup';
import { ButtonBase } from '@cb-general/core/ButtonBase';
// local files
import styles from './WkdGameRounds.module.scss';

type Props = React.ComponentProps<typeof ButtonGroup> & {
  label?: string;
  value?: 1 | 3 | 6 | 9;
};

export const GameRounds = (props: Props) => {
  const { className, value, label, ...restProps } = props;

  return (
    <ButtonGroup
      className={clsx(className, value && styles[`v_${value}`])}
      value={value}
      classes={styles}
      cloneOnlyStyles
      {...restProps}
      data-label={label}
    >
      <ButtonBase value={1} />
      <ButtonBase value={3} />
      <ButtonBase value={6} />
      <ButtonBase value={9} />
    </ButtonGroup>
  );
};

GameRounds.defaultProps = {
  value: 1,
};
