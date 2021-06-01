import React from 'react';
import { styled } from '../utils/styled';
// local
import { ButtonBase } from '../ButtonBase';
import styles from './CoreOption.module.scss';

export const Option: React.FC<
  React.ComponentProps<typeof ButtonBase> & { value?: number | string }
> = styled(ButtonBase, styles);
