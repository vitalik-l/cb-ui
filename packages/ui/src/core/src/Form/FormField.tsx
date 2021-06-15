import React from 'react';
import { useField, FieldProps } from 'react-final-form';
import clsx from 'clsx';

// local files
import { useFieldsLayout } from './useFieldsLayout';
import { useCoreForm } from './useCoreForm';
import { useClasses } from '../hooks/useClasses';
import { FormFieldContext } from './FormFieldContext';
import styles from './CoreFormField.module.scss';

type LayoutClassName = `layout_${'inline' | 'stacked'}`;
type ClassesType = {
    [key in LayoutClassName]?: string;
  } & {
  inline?: string;
  item?: string;
  label?: string;
  subLabel?: string;
  control?: string;
  fullWidth?: string;
  error?: string;
  root?: string;
};

type Props<T extends React.ElementType = React.ElementType> = FieldProps<any, any> & {
  Label?: React.ElementType;
  Error?: React.ElementType;
  label?: React.ReactNode;
  subLabel?: React.ReactNode;
  placeholder?: string;
  name: string;
  component?: T;
  inputProps?: React.ComponentProps<T>;
  error?: React.ReactNode;
  id?: string;
  fullWidth?: boolean;
  showError?: boolean;
  className?: string;
  classes?: ClassesType;
  inputClasses?: any;
  layout?: string;
};

const sanitizeFieldProps = ({ validate, ...props }: any) => props;

export const FormField = React.memo((props: Props) => {
  const {
    Label = 'label',
    Error = 'div',
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
    classes: classesProp,
    layout: layoutProp,
    inputClasses,
    inputProps,
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
        classes: inputClasses,
      };
  const classes: ClassesType = useClasses(styles, classesProp);
  const inlineClass = isInline ? classes.inline : undefined;

  const content = (
    <FormFieldContext.Provider value={meta}>
      {label !== undefined && (
        <div className={clsx(classes.item, classes.label, inlineClass)}>
          <Label htmlFor={id}>{label}</Label>
          {!!subLabel && <div className={classes.subLabel}>{subLabel}</div>}
        </div>
      )}
      <div
        className={clsx(classes.item, classes.control, inlineClass, fullWidth && classes.fullWidth)}
      >
        <Component
          placeholder={placeholder}
          id={id}
          {...inputProps}
          {...sanitizeFieldProps(fieldProps)}
          {...input}
          {...customProps}
        />
      </div>
      {showError && invalid && (
        <>
          <div />
          <Error className={clsx(classes.error, inlineClass)}>{errorMessage}</Error>
        </>
      )}
    </FormFieldContext.Provider>
  );

  if (layout !== 'inline') {
    return (
      <div className={clsx(classes.root, className, layout && classes[`layout_${layout}` as LayoutClassName])}>
        {content}
      </div>
    );
  }

  return content;
});
