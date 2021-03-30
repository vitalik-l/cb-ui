import React from 'react';

// local files
import { FormField } from './FormField';
import { Input } from '../Input';

export const TextField = (props: any) => (
  <FormField {...props} component={Input} />
);