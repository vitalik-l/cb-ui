import React from 'react';
import { useFormState } from 'react-final-form';

export const Submit = (props: any) => {
  const { component = 'button', disabled, ...restProps } = props;
  const { hasValidationErrors } = useFormState();
  const Component = component;

  return (
    <Component
      disabled={hasValidationErrors || disabled}
      type="submit"
      {...restProps}
    />
  )
};