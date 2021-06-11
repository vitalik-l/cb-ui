import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';

// local files
import { Label } from '../Label';
import { Input } from '../Input';
import styles from './CgFormField.module.scss';

export const FormField = (props: React.ComponentProps<typeof CoreFormField>) => (
  <CoreFormField component={Input} {...props} Label={Label} classes={styles} />
);
