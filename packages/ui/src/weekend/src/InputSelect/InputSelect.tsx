import React from 'react';
import { Input } from '@cb-general/core/Input';
import { useControlled } from '@cb-general/core/hooks/useControlled';

// local files
import { Select } from '../Select';
import styles from './InputSelect.module.scss';

type Props<T extends React.ElementType> = React.ComponentProps<typeof Select> & {
  InputComponent?: T;
  inputProps?: React.ComponentProps<T>;
};

const inputClasses = {
  root: styles.inputRoot,
  input: styles.inputItem,
};

export const InputSelect = <T extends React.ElementType>(props: Props<T>) => {
  const {
    InputComponent = Input,
    value: valueProp,
    defaultValue,
    onChange,
    inputProps,
    ...restProps
  } = props;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'InputSelect',
  });

  const handleChange = (event: any) => {
    const value = event.target.value;
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select
      classes={styles}
      input={
        <InputComponent
          classes={inputClasses}
          value={value || ''}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...inputProps}
        />
      }
      onChange={handleChange}
      value={value}
      defaultValue={defaultValue}
      {...restProps}
    />
  );
};
