import React from 'react';
import { Slider as CoreSlider } from '@cb-general/core/Slider';

// local files
import { Thumb } from './Thumb';
import classes from './Slider.module.scss';

export const Slider = (props: any) => (
  <CoreSlider classes={classes} ThumbComponent={Thumb} {...props} />
);
