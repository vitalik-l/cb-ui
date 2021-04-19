import React from 'react';
import { Radio as CoreRadio } from '@cb-general/core/Radio';
import { styled } from '@cb-general/core/utils/styled';

// local files
import { Icon } from './Icon';
import { CheckedIcon } from './CheckedIcon';
import { Label } from '../Label';
import styles from './CgRadio.module.scss';

export const Radio = styled(CoreRadio, styles);

Radio.defaultProps = {
  icon: <Icon className={styles.icon} />,
  checkedIcon: <CheckedIcon className={styles.icon} />,
  Label,
};
