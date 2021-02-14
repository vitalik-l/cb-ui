import React from 'react';

// local files
import { Slider as CoreSlider } from '@cb-general/core/Slider';
import classes from '../styles/classes.module.scss';
import './Slider.scss';

export const Slider = (props: any) => {
  return <CoreSlider classNamePrefix={classes.Slider} valueLabelDisplay="on" {...props} />;
};
