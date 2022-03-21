import React from 'react';
import { SwitchBase } from '@cb-general/core/SwitchBase';
import { styled } from '@cb-general/core/utils/styled';
import { ClassicLabel } from '../../Label';
import styles from './ClassicCheckbox.module.scss';

export const ClassicCheckbox = styled(SwitchBase, styles);

ClassicCheckbox.defaultProps = {
  type: 'checkbox',
  icon: <span className={styles.icon} />,
  checkedIcon: <span className={styles.checkedIcon} />,
  LabelComponent: ClassicLabel,
};
