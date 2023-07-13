import React, {FormHTMLAttributes} from 'react';
import {Form as FinalForm, FormProps} from 'react-final-form';
import {FieldsLayout} from './FieldsLayout';
import {FormContext} from './FormContext';

type Props = {
  className?: string;
  layout?: 'default' | 'inline' | 'stacked';
  children?: any;
  fullWidth?: boolean;
  htmlForm?: FormHTMLAttributes<any>
} & FormProps;

export const Form = React.forwardRef((props: Props, ref: any) => {
  const {className, children, layout = 'default', id, fullWidth, htmlForm, ...finalFormProps} = props;
  const context = React.useMemo(
    () => ({
      isCoreForm: true,
      fullWidth: !!fullWidth,
    }),
    [fullWidth],
  );

  return (
    <FormContext.Provider value={context}>
      <FinalForm {...finalFormProps}>
        {({handleSubmit, ...formState}) => (
          <form className={className} onSubmit={handleSubmit} id={id} ref={ref} {...htmlForm}>
            {layout ? (
              <FieldsLayout type={layout}>
                {typeof children === 'function'
                  ? children({handleSubmit, ...formState})
                  : children}
              </FieldsLayout>
            ) : typeof children === 'function' ? (
              children({handleSubmit, ...formState})
            ) : (
              children
            )}
          </form>
        )}
      </FinalForm>
    </FormContext.Provider>
  );
});
