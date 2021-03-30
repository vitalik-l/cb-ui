import React from 'react';

// local files
import { FormField } from './FormField';
import { Select } from '../Select';

export const SelectField = (props: React.ComponentProps<typeof FormField>) => (
  <FormField {...props} component={Select} />
);
