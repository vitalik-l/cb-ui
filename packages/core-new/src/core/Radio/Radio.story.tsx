import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Radio } from './index';

const story = createStory({
  title: 'Radio',
  component: Radio,
});

export const Template: Story = (args) => <Radio {...args} />;
Template.storyName = 'Radio';

export default story;
