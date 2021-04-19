import React from 'react';
import clsx from 'clsx';

type ClassesType = {
  root?: string;
  grouped?: string;
  selected?: string;
};

export type ButtonGroupProps = {
  className?: string;
  color?: string;
  variant?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
  disabled?: boolean;
  classes?: ClassesType;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, children, color, variant, onChange, value, disabled, classes } = props;

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
      className: clsx(classes?.grouped, childClassName, selected && classes?.selected),
      ...childProps,
    });
  });

  return <div className={clsx(classes?.root, className)}>{childrenItems}</div>;
};
