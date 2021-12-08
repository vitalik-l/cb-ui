import clsx from 'clsx';
import React from 'react';

type ClassesType = {
  root?: string;
  grouped?: string;
  selected?: string;
  disabled?: string;
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
  cloneProps?: boolean;
  autoValue?: boolean;
  disableToggle?: boolean;
  ThumbComponent?: React.ElementType;
} & Omit<React.ComponentProps<'div'>, 'onChange'>;

export type ButtonGroupThumbProps = {
  selectedIndex?: number;
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
    disableToggle,
    ThumbComponent,
    ...restProps
  } = props;

  let selectedIndex = -1;

  const childrenItems = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const {
      className: childClassName,
      onClick: childClick,
      selected: childSelected,
      ...childProps
    } = child.props;
    const childValue = autoValue && childProps.value === undefined ? childIndex : childProps.value;
    const selected = childSelected ?? childValue === value;
    let parentProps = {};

    if (selected) {
      selectedIndex = childIndex;
    }

    const handleClick = (event: any) => {
      if (onChange) {
        if (!disableToggle || (disableToggle && !selected)) {
          onChange(childValue);
        }
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
      {!!ThumbComponent && <ThumbComponent selectedIndex={selectedIndex} />}
    </div>
  );
};
