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
  children?: (...args: any) => any | React.ReactNode;
} & FormProps;

export const Form = React.forwardRef((props: Props, ref: any) => {
  const { className, children, layout = 'default', id, ...formProps } = props;

  return (
    <FinalForm {...formProps}>
      {({ handleSubmit, ...formState }) => (
        <form className={clsx(classes.Form, className)} onSubmit={handleSubmit} id={id} ref={ref}>
          {layout ? <FieldsLayout type={layout}>{typeof children === 'function' ? children({handleSubmit, ...formState}) : children}</FieldsLayout> : typeof children === 'function' ? children({handleSubmit, ...formState}) : children}
        </form>
      )}
    </FinalForm>
  );
});
