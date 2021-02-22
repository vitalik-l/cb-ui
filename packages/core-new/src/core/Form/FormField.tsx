import React from 'react';
import { useField } from 'react-final-form';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import formFieldClasses from './FormField.module.scss';
import { useFieldsLayout } from './useFieldsLayout';

export const FormField = (props: any) => {
  const layout = useFieldsLayout();
  const {
    Label = 'label',
    label,
    placeholder,
    name,
    component = 'input',
    error,
    id,
    children,
    fullWidth,
    ...fieldProps
  } = props;
  const { input, meta } = useField(name, fieldProps);
  const Component = component;
  const isDefaultComponent = typeof component === 'string';
  const customProps = isDefaultComponent ? {} : {
    invalid: typeof error === 'function'
      ? error({ input, meta })
      : meta.touched && meta.error,
    fullWidth,
  };

  const content = (
    <>
      <div className={formFieldClasses.Label}>
        <Label htmlFor={id}>{label}</Label>
      </div>
      <div
        className={clsx(formFieldClasses.Control, {
          [`${formFieldClasses.Control}_fullWidth`]: !!fullWidth,
        })}
      >
        <Component
          placeholder={placeholder}
          id={id}
          children={children}
          {...input}
          {...customProps}
        />
      </div>
    </>
  );

  if (layout !== 'inline') {
    return <div className={classes.FormField}>{content}</div>;
  }

  return content;
};
