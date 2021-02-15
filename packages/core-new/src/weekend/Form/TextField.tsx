import React from 'react';

// local files
import { Input } from '../Input';
import { FormField } from './FormField';

export const TextField = (props: any) => <FormField component={Input} {...props} />;
