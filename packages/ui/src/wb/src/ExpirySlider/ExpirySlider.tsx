import React from 'react';
import { Box } from '@cb-general/core/Box';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { ButtonGroup, ButtonGroupThumbProps } from '@cb-general/core/ButtonGroup';
import { styled } from '@cb-general/core/utils/styled';
import styles from './WbExpirySlider.module.scss';

const Thumb = ({ selectedIndex }: ButtonGroupThumbProps) => {
  const transform =
    selectedIndex !== undefined && selectedIndex > -1
      ? `translateX(calc(${selectedIndex} * ${styles.itemWidth}))`
      : undefined;

  return <Box className={styles.thumb} transform={transform} />;
};

export const ExpirySliderItem = styled(ButtonBase, styles.item);

export const ExpirySlider = styled(ButtonGroup, styles);

ExpirySlider.defaultProps = {
  ThumbComponent: Thumb,
};
