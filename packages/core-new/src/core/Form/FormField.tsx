import React from 'react';
import { useField } from 'react-final-form';
import clsx from 'clsx';

// local files
import rootClasses from '../styles/classes.module.scss';
import formFieldClasses from './FormField.module.scss';
import { useFieldsLayout } from './useFieldsLayout';

const sanitizeFieldProps = ({ validate, ...props }: any) => props;

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
    showError = false,
    className,
    ...fieldProps
  } = props;
  const { input, meta } = useField(name, fieldProps);
  const Component = component;
  const isDefaultComponent = typeof component === 'string';
  const invalid = typeof error === 'function' ? error({ input, meta }) : meta.touched && meta.error;
  const customProps = isDefaultComponent
    ? {}
    : {
        invalid,
        fullWidth,
      };

  const classes = React.useMemo(
    () => ({
      label: clsx(formFieldClasses.Label, { [`${className}-label`]: !!className }),
      control: clsx(formFieldClasses.Control, { [`${className}-control`]: !!className }),
      error: clsx(formFieldClasses.Error, { [`${className}-error`]: !!className }),
      root: clsx(rootClasses.FormField, `${className}`),
    }),
    [className],
  );

  const content = (
    <>
      <div className={classes.label}>
        <Label htmlFor={id}>{label}</Label>
      </div>
      <div
        className={clsx(classes.control, {
          [`${formFieldClasses.Control}_fullWidth`]: !!fullWidth,
        })}
      >
        <Component
          placeholder={placeholder}
          id={id}
          children={children}
          {...sanitizeFieldProps(fieldProps)}
          {...input}
          {...customProps}
        />
        {showError && invalid && <div className={classes.error}>{meta.error}</div>}
      </div>
    </>
  );

  if (layout !== 'inline') {
    return (
      <div
        className={clsx(classes.root, {
          [`${rootClasses.FormField}_layout_${layout}`]: layout,
        })}
      >
        {content}
      </div>
    );
  }

  return content;
};
