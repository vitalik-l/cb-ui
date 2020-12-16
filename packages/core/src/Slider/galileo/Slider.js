import React from 'react';

// local files
import SliderBase from '../Slider';
import { Thumb } from './Thumb';

export const Slider = (props) => {
  return <SliderBase ThumbComponent={Thumb} {...props} />
};