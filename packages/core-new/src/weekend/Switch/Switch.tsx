import React from 'react';
import clsx from 'clsx';
import { useControlled } from '@cb-general/core/hooks/useControlled';
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
  const { value, defaultValue, onChange, name, disabled, labelOn, labelOff } = props;
  const [checked, setChecked] = useControlled({controlled: value, default: !!defaultValue, name: 'Switch'});

  const handleChange = (event: any) => {
    const newValue = event.target.checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <ButtonBase disabled={disabled} className={classes.Switch} tabIndex={null} role={undefined}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={value}
        defaultChecked={defaultValue}
        className={`${classes.Switch}__input`}
        name={name}
        disabled={disabled}
        tabIndex={0}
      />
      <div
        className={clsx(styles.item, {
          [styles.itemSelected]: !!checked,
        })}
      >
        <span>{labelOn}</span>
      </div>
      <div
        className={clsx(styles.item, {
          [styles.itemSelected]: !checked,
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
