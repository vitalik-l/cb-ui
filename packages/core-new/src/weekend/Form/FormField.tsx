import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';

// local files
import { Label } from '../Label';
import classes from '../styles/classes.module.scss';
import './FormField.scss';

export const FormField = (props: any) => <CoreFormField Label={Label} className={classes.FormField} {...props} />;
