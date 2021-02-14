import React from 'react';
import clsx from 'clsx';

export type ButtonGroupProps = {
  className?: string;
  color?: string;
  variant?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
  classNamePrefix?: string;
  disabled?: boolean;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, classNamePrefix, children, color, variant, onChange, value, disabled } = props;

  const childrenItems = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const { className: childClassName, onClick: childClick, ...childProps } = child.props;
    const childValue = childProps.value === undefined ? childIndex : childProps.value;
    const selected = childValue === value;

    const handleClick = (event: any) => {
      if (!selected && onChange) {
        onChange(childValue);
      }

      if (childClick) {
        childClick(event);
      }
    };

    return React.cloneElement(child, {
      selected,
      color,
      onChange,
      variant,
      disabled,
      onClick: handleClick,
      className: clsx(`${classNamePrefix}-grouped`, childClassName, {
        [`${classNamePrefix}-grouped_selected`]: selected,
      }),
      ...childProps,
    });
  });

  return <div className={clsx(classNamePrefix, className)}>{childrenItems}</div>;
};
