import React from 'react';
import { SwitchBase } from '@cb-general/core/SwitchBase';
import { styled } from '@cb-general/core/utils/styled';
import { Label } from '../Label';
import { CheckedIcon } from './CheckedIcon';
import { Icon } from './Icon';
import styles from './FlatRadio.module.scss';

export const Radio = styled(SwitchBase, styles);

Radio.defaultProps = {
  icon: <Icon className={styles.icon} />,
  checkedIcon: <CheckedIcon className={styles.icon} />,
  LabelComponent: Label,
};
