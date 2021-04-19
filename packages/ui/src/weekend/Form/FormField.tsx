import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';

// local files
import { Label } from '../Label';
import styles from './WkdFormField.module.scss';

export const FormField = (props: any) => (
  <CoreFormField Label={Label} classes={styles} {...props} />
);
