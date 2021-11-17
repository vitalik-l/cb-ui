import React from 'react';
import { Select } from '../Select';
import { FormField } from './FormField';

export const SelectField = (props: React.ComponentProps<typeof FormField>) => (
  <FormField {...props} component={Select} />
);
