import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ChipsControls } from './index';

const story = createStory({
  title: 'ChipsControls',
  component: ChipsControls,
});

export const ChipsControlsTemplate: Story = (args) => <ChipsControls {...args} />;
ChipsControlsTemplate.storyName = 'ChipsControls';

export default story;
