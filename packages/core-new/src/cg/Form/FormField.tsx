import React from 'react';
import { FormField as CoreFormField } from '@cb-general/core/Form';

// local files
import { Label } from './Label';
import styles from './CgFormField.module.scss';

export const FormField = (props: any) => <CoreFormField {...props} Label={Label} classes={styles} />;