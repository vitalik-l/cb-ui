import React from 'react';
import { SwitchBase } from '@cb-general/core/SwitchBase';
import { styled } from '@cb-general/core/utils/styled';

// local files
import { Icon } from './Icon';
import { CheckedIcon } from './CheckedIcon';
import { Label } from '../Label';
import styles from './CgRadio.module.scss';

export const Radio = styled(SwitchBase, styles);

Radio.defaultProps = {
  icon: <Icon className={styles.icon} />,
  checkedIcon: <CheckedIcon className={styles.icon} />,
  LabelComponent: Label,
};
