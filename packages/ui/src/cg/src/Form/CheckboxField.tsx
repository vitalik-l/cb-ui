import React from 'react';

// local files
import { FormField } from './FormField';
import { Checkbox } from '../Checkbox';

export const CheckboxField = ({ label, ...restProps}: React.ComponentProps<typeof FormField>) => (
  <FormField {...restProps} component={Checkbox} type="checkbox" children={label} />
);
