import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Panel } from './index';

const story = createStory({
  title: 'Panel',
  component: Panel,
  style: { width: '10rem', height: '10rem' },
});

export const Template: Story = (args) => <Panel {...args} />;
Template.storyName = 'Panel';

export default story;
