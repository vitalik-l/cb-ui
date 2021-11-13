import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Box } from './index';

const story = createStory({
  title: 'Box',
  component: Box,
});

export const Template: Story = (args) => <Box {...args}>Box content</Box>;
Template.storyName = 'Box';

export default story;
