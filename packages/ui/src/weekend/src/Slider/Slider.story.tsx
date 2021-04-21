import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Slider } from './index';

const story = index({
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: { control: 'boolean' },
  },
});

export const Default: Story = (args) => <Slider {...args} style={{ marginTop: '3em' }} />;
Default.storyName = 'Slider';

export default story;
