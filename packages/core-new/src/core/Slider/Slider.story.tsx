import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Slider } from './index';
import './Slider.story.scss';

const story = createStory({
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: { control: 'boolean' },
  }
});

export const Default: Story = (args) => (
  <Slider {...args} classNamePrefix="StorySlider" style={{ width: '15rem', marginLeft: '2em' }} />
);
Default.storyName = 'Slider';

export default story;
