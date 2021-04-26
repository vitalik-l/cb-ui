import React from 'react';
import clsx from 'clsx';

type ClassesType = {
  root?: string;
  grouped?: string;
  selected?: string;
  disabled?: string;
};

export type ButtonGroupProps = React.ComponentProps<'div'> & {
  className?: string;
  color?: string;
  variant?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
  disabled?: boolean;
  classes?: ClassesType;
  cloneOnlyStyles?: boolean;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, children, color, variant, onChange, value, disabled, classes, cloneOnlyStyles = false, ...restProps } = props;

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

    if (cloneOnlyStyles) {
      childProps.value = undefined;
    } else {
      childProps.selected = selected;
      childProps.color = color;
      childProps.onChange = onChange;
      childProps.variant = variant;
      childProps.disabled = disabled;
    }

    return React.cloneElement(child, {
      onClick: handleClick,
      className: clsx(classes?.grouped, childClassName, selected && classes?.selected),
      ...childProps,
    });
  });

  return (
    <div className={clsx(classes?.root, className, disabled && classes?.disabled)} {...restProps}>
      {childrenItems}
    </div>
  );
};
