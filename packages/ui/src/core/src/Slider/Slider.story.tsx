import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Slider } from './index';
import styles from './StorySlider.module.scss';
import geStyles from './GeSlider.module.scss';

const story = createStory({
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: { control: 'boolean' },
  },
});

export const Default: Story = (args) => (
  <Slider {...args} classes={styles} style={{ width: '15rem', marginLeft: '2em' }} />
);
Default.storyName = 'Slider';

export const GeSlider: Story = (args) => (
  <Slider {...args} classes={geStyles} style={{ width: '15rem', marginLeft: '2em' }} />
);

export default story;
