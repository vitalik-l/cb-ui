import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { GameLinks } from './index';

const story = createStory({
  title: 'GameLinks',
  component: GameLinks,
});

export const Template: Story = (args) => (
  <GameLinks {...args} />
);
Template.storyName = 'GameLinks';

export default story;
