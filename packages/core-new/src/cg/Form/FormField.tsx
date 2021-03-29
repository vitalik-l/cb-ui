import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';

// local files
import { Label } from './Label';

export const FormField = (props: any) => <CoreFormField {...props} Label={Label} />;