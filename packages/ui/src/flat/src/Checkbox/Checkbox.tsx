import React from 'react';
import { SwitchBase } from '@cb-general/core/SwitchBase';
import { styled } from '@cb-general/core/utils/styled';

// local files
import { Label } from '../Label';
import styles from './Checkbox.module.scss';

export const Checkbox = styled(SwitchBase, styles);

Checkbox.defaultProps = {
  type: 'checkbox',
  icon: <span className={styles.icon} />,
  checkedIcon: <span className={styles.checkedIcon} />,
  LabelComponent: Label,
};
