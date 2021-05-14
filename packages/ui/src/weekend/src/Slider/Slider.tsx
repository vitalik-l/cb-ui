import { Slider as CoreSlider } from '@cb-general/core/Slider';
import { styled } from '@cb-general/core/utils/styled';

// local files
import { ValueLabel } from './ValueLabel';
import styles from './WkdSlider.module.scss';

export const Slider = styled(CoreSlider, styles);
Slider.defaultProps = {
  valueLabelDisplay: 'on',
  ValueLabelComponent: ValueLabel,
};
