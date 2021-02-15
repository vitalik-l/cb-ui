import React from 'react';

// local files
import { Label } from '../Label';
import { FormField as CoreFormField } from '../../core/Form';

export const FormField = (props: any) => <CoreFormField Label={Label} {...props} />;
