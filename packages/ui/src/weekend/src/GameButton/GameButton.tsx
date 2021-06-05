import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './WkdGameButton.module.scss';

type Color = 'primary' | 'default' | 'green';
type ColorClassName = `color_${Color}`;
type Classes = {
  [key in ColorClassName]: string;
} & {
  root?: string;
  large?: string;
  unclickable?: string;
  sublabelAlignTop?: string;
  sublabel?: string;
  label?: string;
};

type Props = React.ComponentProps<typeof ButtonBase> & {
  color?: Color;
  sublabel?: string;
  unclickable?: boolean;
  sublabelAlignTop?: boolean;
  large?: boolean;
  classes?: Classes;
};

export const GameButton = (props: Props) => {
  const {
    className,
    color,
    children,
    sublabel,
    unclickable,
    sublabelAlignTop,
    large,
    classes: classesProp,
    ...restProps
  } = props;
  const classes: Classes = useClasses(styles, classesProp) as any;

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        className,
        !!color && classes[`color_${color}` as ColorClassName],
        large && classes.large,
        unclickable && classes.unclickable,
        sublabelAlignTop && classes.sublabelAlignTop,
      )}
      {...restProps}
    >
      {!!sublabel && <span className={classes.sublabel}>{sublabel}</span>}
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
};

GameButton.defaultProps = {
  color: 'default',
};
