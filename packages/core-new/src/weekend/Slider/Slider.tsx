import React from 'react';

// local files
import { Slider as CoreSlider } from '@cb-general/core/Slider';
import classes from './Slider.module.scss';

export const Slider = (props: any) => {
  return <CoreSlider classes={classes} valueLabelDisplay="on" {...props} />;
};
