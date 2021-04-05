import React from 'react';
import clsx from 'clsx';

type ClassesType = {
  root?: string;
  grouped?: string;
};

export type RadioGroupProps = {
  className?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
  classes?: ClassesType;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const { className, children, onChange, value, disabled, classes, name } = props;

  const childrenItems = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const { className: childClassName, onChange: childOnChange, ...childProps } = child.props;
    const childValue = childProps.value === undefined ? childIndex : childProps.value;
    const checked = childValue === value;

    const handleChange = (event: any) => {
      if (onChange) {
        onChange(childValue);
      }

      if (childOnChange) {
        childOnChange(event);
      }
    };

    return React.cloneElement(child, {
      checked,
      name,
      disabled,
      onChange: handleChange,
      className: clsx(classes?.grouped, childClassName),
      ...childProps,
    });
  });

  return <div className={clsx(classes?.root, className)}>{childrenItems}</div>;
};
