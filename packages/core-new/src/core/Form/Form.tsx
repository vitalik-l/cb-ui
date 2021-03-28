import React from 'react';
import clsx from 'clsx';
import { Form as FinalForm, FormProps } from 'react-final-form';

// local files
import { FieldsLayout } from './FieldsLayout';
import { FormContext } from './FormContext';

type Props = {
  className?: string;
  layout?: 'default' | 'inline' | 'stacked';
  children?: any;
} & FormProps;

export const Form = React.forwardRef((props: Props, ref: any) => {
  const { className, children, layout = 'default', id, ...formProps } = props;

  return (
    <FormContext.Provider value={true}>
      <FinalForm {...formProps}>
        {({ handleSubmit, ...formState }) => (
          <form className={className} onSubmit={handleSubmit} id={id} ref={ref}>
            {layout ? (
              <FieldsLayout type={layout}>
                {typeof children === 'function'
                  ? children({ handleSubmit, ...formState })
                  : children}
              </FieldsLayout>
            ) : typeof children === 'function' ? (
              children({ handleSubmit, ...formState })
            ) : (
              children
            )}
          </form>
        )}
      </FinalForm>
    </FormContext.Provider>
  );
});
