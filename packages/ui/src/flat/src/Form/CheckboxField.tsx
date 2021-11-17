import React from 'react';
import { Checkbox } from '../Checkbox';
import { FormField } from './FormField';

export const CheckboxField = ({ label, ...restProps }: React.ComponentProps<typeof FormField>) => (
  <FormField {...restProps} component={Checkbox} type="checkbox" children={label} />
);
