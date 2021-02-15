import React from 'react';

// local files
import { Select } from '../Select';
import { FormField } from './FormField';

export const SelectField = (props: any) => <FormField component={Select} {...props} />;
