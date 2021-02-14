import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import classes from '../styles/classes.module.scss';
import './Switch.scss';

type Props = any;

const styles = {
  item: `${classes.Switch}-item`,
  itemSelected: `${classes.Switch}-item_selected`,
};

export const Switch = (props: Props) => {
  const { value, onChange, name, disabled, labelOn, labelOff } = props;

  const handleChange = (event: any) => {
    onChange(event.target.checked);
  };

  return (
    <ButtonBase disabled={disabled} className={classes.Switch} tabIndex={null} role={undefined}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={value}
        className={`${classes.Switch}__input`}
        name={name}
        disabled={disabled}
        tabIndex={0}
      />
      <div
        className={clsx(styles.item, {
          [styles.itemSelected]: !!value,
        })}
      >
        <span>{labelOn}</span>
      </div>
      <div
        className={clsx(styles.item, {
          [styles.itemSelected]: !value,
        })}
      >
        <span>{labelOff}</span>
      </div>
    </ButtonBase>
  );
};

Switch.defaultProps = {
  labelOn: 'ON',
  labelOff: 'OFF',
};
