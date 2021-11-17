import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';
import { Input } from '../Input';
import { Label } from '../Label';
import styles from './FlatFormField.module.scss';

export const FormField = (props: React.ComponentProps<typeof CoreFormField>) => (
  <CoreFormField component={Input} {...props} Label={Label} classes={styles} />
);
