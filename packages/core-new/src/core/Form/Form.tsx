import React from 'react';
import clsx from 'clsx';
import { Form as FinalForm, FormProps } from 'react-final-form';

// local files
import { FieldsLayout } from './FieldsLayout';
import classes from '../styles/classes.module.scss';
import './Form.scss';

type Props = {
  className?: string;
  layout?: 'default' | 'inline' | 'stacked';
  children?: any;
  formRef?: any;
} & FormProps;

export const Form = (props: Props) => {
  const { className, children, layout = 'default', id, formRef, ...formProps } = props;

  return (
    <FinalForm {...formProps}>
      {({ handleSubmit, ...formState }) => (
        <form
          className={clsx(classes.Form, className)}
          onSubmit={handleSubmit}
          id={id}
          ref={formRef}
        >
          {layout ? (
            <FieldsLayout type={layout}>
              {typeof children === 'function' ? children({ handleSubmit, ...formState }) : children}
            </FieldsLayout>
          ) : typeof children === 'function' ? (
            children({ handleSubmit, ...formState })
          ) : (
            children
          )}
        </form>
      )}
    </FinalForm>
  );
};
