import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useControlled } from '@cb-general/core/hooks/useControlled';
import styles from './WkdSwitch.module.scss';

type Props = any;

export const Switch = (props: Props) => {
  const { value, defaultValue, onChange, name, disabled, labelOn, labelOff, ...inputProps } = props;
  const [checked, setChecked] = useControlled({
    controlled: value,
    default: !!defaultValue,
    name: 'Switch',
  });

  const handleChange = (event: any) => {
    const newValue = event.target.checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue, event);
    }
  };

  return (
    <ButtonBase disabled={disabled} className={styles.root} tabIndex={null} role={undefined}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={value}
        defaultChecked={defaultValue}
        className={styles.input}
        name={name}
        disabled={disabled}
        tabIndex={0}
        {...inputProps}
      />
      <div
        className={clsx(styles.item, {
          [styles.selected]: !!checked,
        })}
      >
        <span className={styles.text}>{labelOn}</span>
      </div>
      <div
        className={clsx(styles.item, {
          [styles.selected]: !checked,
        })}
      >
        <span className={styles.text}>{labelOff}</span>
      </div>
    </ButtonBase>
  );
};

Switch.defaultProps = {
  labelOn: 'ON',
  labelOff: 'OFF',
};
