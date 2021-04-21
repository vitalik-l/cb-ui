import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { ConnectionStatus } from './index';

const story = index({
  title: 'ConnectionStatus',
  component: ConnectionStatus,
});

export const Template: Story = (args) => <ConnectionStatus {...args} />;
Template.storyName = 'ConnectionStatus';

export default story;
