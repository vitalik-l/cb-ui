import React from 'react';
import { useField } from 'react-final-form';
import clsx from 'clsx';

// local files
import { useFieldsLayout } from './useFieldsLayout';
import { isFinalForm } from './isFinalForm';
import rootClasses from '../styles/classes.module.scss';
import formFieldClasses from './FormField.module.scss';

const sanitizeFieldProps = ({ validate, ...props }: any) => props;

export const FormField = (props: any) => {
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
    showError = true,
    className,
    classNamePrefix,
    ...fieldProps
  } = props;
  const { input = {}, meta = {} } = isFinalForm() ? useField(name, fieldProps) : {}; // eslint-disable-line
  const layout = useFieldsLayout();
  const Component = component;
  const isDefaultComponent = typeof component === 'string';
  const errorMessage = typeof error === 'function' ? error({ input, meta }) : error || (meta.touched && meta.error);
  const invalid = !!errorMessage;
  const customProps = isDefaultComponent
    ? {}
    : {
        invalid,
        fullWidth,
      };

  const classes = React.useMemo(
    () => ({
      root: clsx(rootClasses.FormField, classNamePrefix),
      item: clsx(formFieldClasses.Item, { [`${classNamePrefix}-item`]: !!classNamePrefix }),
      label: clsx(formFieldClasses.Label, { [`${classNamePrefix}-label`]: !!classNamePrefix }),
      control: clsx(formFieldClasses.Control, { [`${classNamePrefix}-control`]: !!classNamePrefix }),
      error: clsx(formFieldClasses.Error, { [`${classNamePrefix}-error`]: !!classNamePrefix }),
    }),
    [classNamePrefix],
  );

  const content = (
    <>
      <div className={clsx(classes.item, classes.label)}>
        <Label htmlFor={id}>{label}</Label>
      </div>
      <div
        className={clsx(classes.item, classes.control, {
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
      </div>
      {showError && invalid &&
        <>
          <div />
          <div className={classes.error}>{errorMessage}</div>
        </>
      }
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
