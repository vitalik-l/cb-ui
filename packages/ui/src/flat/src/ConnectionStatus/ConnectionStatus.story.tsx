import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ConnectionStatus } from './index';

const story = createStory({
  title: 'ConnectionStatus',
  component: ConnectionStatus,
});

export const Template: Story = (args) => <ConnectionStatus {...args} />;
Template.storyName = 'ConnectionStatus';

export default story;
