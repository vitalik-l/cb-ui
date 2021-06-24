import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Clocks } from './index';

const story = createStory({
  title: 'Clocks',
  component: Clocks,
});

export const Template: Story = (args) => <Clocks {...args} />;
Template.storyName = 'Clocks';

export default story;
