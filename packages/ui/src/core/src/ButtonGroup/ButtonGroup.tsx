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
  cloneProps?: boolean;
  autoValue?: boolean;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const {
    className,
    children,
    color,
    variant,
    onChange,
    value,
    disabled,
    classes,
    cloneProps = true,
    autoValue = true,
    ...restProps
  } = props;

  const childrenItems = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const { className: childClassName, onClick: childClick, ...childProps } = child.props;
    const childValue = autoValue && childProps.value === undefined ? childIndex : childProps.value;
    const selected = childValue === value;
    let parentProps = {};

    const handleClick = (event: any) => {
      if (!selected && onChange) {
        onChange(childValue);
      }

      if (childClick) {
        childClick(event);
      }
    };

    if (cloneProps) {
      parentProps = {
        selected,
        disabled,
        onChange,
        color,
        variant,
      };
    } else {
      childProps.value = undefined;
    }

    return React.cloneElement(child, {
      onClick: handleClick,
      className: clsx(classes?.grouped, childClassName, selected && classes?.selected),
      ...parentProps,
      ...childProps,
    });
  });

  return (
    <div className={clsx(classes?.root, className, disabled && classes?.disabled)} {...restProps}>
      {childrenItems}
    </div>
  );
};
