import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ChipsStack } from './index';
import { Chip } from '../Chip';

const story = createStory({
  title: 'ChipsStack',
  component: ChipsStack,
});

export const Template: Story = (args) => (
  <ChipsStack {...args}>
    <Chip value={1} />
    <Chip value={5} />
    <Chip value={10} />
  </ChipsStack>
);
Template.storyName = 'ChipsStack';

export default story;
