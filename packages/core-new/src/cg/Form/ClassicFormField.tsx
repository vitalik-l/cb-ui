import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';

// local files
import { ClassicLabel } from '../Label';
import { ClassicInput } from '../Input';
import styles from './ClassicFormField.module.scss';

export const ClassicFormField = (props: any) => (
  <CoreFormField component={ClassicInput} {...props} Label={ClassicLabel} classes={styles} />
);
