import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';

const story = createStory({
  title: 'Styles',
  style: false,
});

export const Default: Story = () => <div />;
Default.storyName = 'Styles';

export default story;
