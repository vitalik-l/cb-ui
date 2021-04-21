import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Panel } from './index';

const story = index({
  title: 'Panel',
  component: Panel,
  style: { width: '10rem', height: '10rem' },
});

export const Template: Story = (args) => <Panel {...args} />;
Template.storyName = 'Panel';

export default story;
