import React from 'react';
import { Input } from '../Input';
import { FormField } from './FormField';

export const TextField = (props: any) => <FormField {...props} component={Input} />;
