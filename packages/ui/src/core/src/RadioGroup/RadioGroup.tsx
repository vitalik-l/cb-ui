import React from 'react';
import clsx from 'clsx';

// local
import styles from './CoreRadioGroup.module.scss';
import { useClasses } from '../hooks/useClasses';

type ClassesType = {
  root?: string;
  child?: string;
  inline?: string;
  stacked?: string;
};

export type RadioGroupProps = {
  className?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
  disabled?: boolean;
  name?: string;
  layout?: false | 'inline' | 'stacked';
  classes?: ClassesType;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const {
    className,
    children,
    onChange,
    value,
    disabled,
    classes: classesProp,
    name,
    layout,
  } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  const childrenItems = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const { className: childClassName, onChange: childOnChange, ...childProps } = child.props;
    const childValue = childProps.value === undefined ? childIndex : childProps.value;
    const checked = childValue === value;

    const handleChange = (event: any) => {
      if (!checked && onChange) {
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
      className: clsx(classes.child, childClassName),
      ...childProps,
    });
  });

  return (
    <div
      className={clsx(
        classes.root,
        className,
        layout === 'inline' && classes.inline,
        layout === 'stacked' && classes.stacked,
      )}
    >
      {childrenItems}
    </div>
  );
};
RadioGroup.defaultProps = {
  layout: 'stacked',
};
