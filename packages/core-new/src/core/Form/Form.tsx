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
} & FormProps;

export const Form = (props: Props) => {
  const { className, children, layout = 'default', id, ...formProps } = props;

  return (
    <FinalForm {...formProps}>
      {({ handleSubmit }) => (
        <form className={clsx(classes.Form, className)} onSubmit={handleSubmit} id={id}>
          {layout ? <FieldsLayout type={layout}>{children}</FieldsLayout> : children}
        </form>
      )}
    </FinalForm>
  );
};
