import { Slider as CoreSlider, ValueLabel as CoreValueLabel } from '@cb-general/core/Slider';
import { styled } from '@cb-general/core/utils/styled';

// local files
import styles from './WkdSlider.module.scss';
import valueLabelStyles from './WkdValueLabel.module.scss';

const ValueLabel = styled(CoreValueLabel, valueLabelStyles);
export const Slider = styled(CoreSlider, styles);
Slider.defaultProps = {
  valueLabelDisplay: 'on',
  ValueLabelComponent: ValueLabel,
};
