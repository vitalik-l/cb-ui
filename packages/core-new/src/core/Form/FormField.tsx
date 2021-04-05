import React from 'react';
import { useField } from 'react-final-form';
import clsx from 'clsx';

// local files
import { useFieldsLayout } from './useFieldsLayout';
import { useCoreForm } from './useCoreForm';
import { useClasses } from '../hooks/useClasses';
import styles from './CoreFormField.module.scss';

const sanitizeFieldProps = ({ validate, ...props }: any) => props;

export const FormField = (props: any) => {
  const {
    Label = 'label',
    label,
    subLabel,
    placeholder,
    name,
    component = 'input',
    error,
    id,
    fullWidth: fullWidthProp,
    showError = true,
    className,
    classNamePrefix,
    classes: classesProp,
    layout: layoutProp,
    ...fieldProps
  } = props;
  const { isCoreForm, fullWidth: formFullWidth } = useCoreForm();
  const { input = {}, meta = {} } = isCoreForm ? useField(name, fieldProps) : {}; // eslint-disable-line
  const fullWidth = fullWidthProp !== undefined ? fullWidthProp : formFullWidth;
  const fieldsLayout = useFieldsLayout();
  const layout = layoutProp || fieldsLayout;
  const isInline = layout === 'inline';
  const Component = component;
  const isDefaultComponent = typeof component === 'string';
  const errorMessage =
    typeof error === 'function' ? error({ input, meta }) : error || (meta.touched && meta.error);
  const invalid = !!errorMessage;
  const customProps = isDefaultComponent
    ? {}
    : {
        invalid,
        fullWidth,
      };
  const classes = useClasses(styles, classesProp);
  const inlineClass = isInline ? classes.inline : undefined;

  const content = (
    <>
      <div className={clsx(classes.item, classes.label, inlineClass)}>
        <Label htmlFor={id}>{label}</Label>
        {!!subLabel &&
          <div className={classes.subLabel}>
            {subLabel}
          </div>
        }
      </div>
      <div
        className={clsx(classes.item, classes.control, inlineClass, {
          [classes.fullWidth]: !!fullWidth,
        })}
      >
        <Component
          placeholder={placeholder}
          id={id}
          {...sanitizeFieldProps(fieldProps)}
          {...input}
          {...customProps}
        />
      </div>
      {showError && invalid && (
        <>
          <div />
          <div className={clsx(classes.error, inlineClass)}>{errorMessage}</div>
        </>
      )}
    </>
  );

  if (layout !== 'inline') {
    return (
      <div className={clsx(classes.root, layout && classes[`layout_${layout}`])}>{content}</div>
    );
  }

  return content;
};
