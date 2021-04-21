import React from 'react';
import { Slider as CoreSlider } from '@cb-general/core/Slider';

// local files
import { Thumb } from './Thumb';
import styles from './FlatSlider.module.scss';

export const Slider = (props: any) => (
  <CoreSlider classes={styles} ThumbComponent={Thumb} {...props} />
);
