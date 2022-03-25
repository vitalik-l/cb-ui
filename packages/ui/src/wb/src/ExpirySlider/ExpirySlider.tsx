import React from 'react';
import { Box } from '@cb-general/core/Box';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { ButtonGroup, ButtonGroupThumbProps } from '@cb-general/core/ButtonGroup';
import { useStyles } from '@cb-general/core/hooks';
import { styled } from '@cb-general/core/utils/styled';
import stylesBase from './WbExpirySlider.module.scss';

const thumbStyles = {
  root: stylesBase.thumb,
  shadow: stylesBase.thumbShadow,
};

export const Thumb = ({
  selectedIndex,
  styles: stylesProp,
}: ButtonGroupThumbProps & { styles: { root?: string; shadow?: string } }) => {
  const transform =
    selectedIndex !== undefined && selectedIndex > -1
      ? `translateX(calc(${selectedIndex} * ${stylesBase.itemWidth}))`
      : undefined;
  const styles = useStyles(thumbStyles, stylesProp);

  return (
    <Box className={styles.root} transform={transform}>
      <div className={styles.shadow} />
    </Box>
  );
};

export const ExpirySliderItem = styled(ButtonBase, stylesBase.item);

export const ExpirySlider = styled(ButtonGroup, stylesBase);

ExpirySlider.defaultProps = {
  ThumbComponent: Thumb,
};
