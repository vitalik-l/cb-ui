import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';

// local files
import { BubbleLabel } from '../Label';
import { BubbleInput } from '../Input';
import styles from './ClassicFormField.module.scss';

export const BubbleFormField = (props: any) => (
  <CoreFormField component={BubbleInput} {...props} Label={BubbleLabel} classes={styles} />
);
