import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GeCircularIndicator, GeCircularIndicatorButton } from './index';
import CircularIndicatorStoryConfig, { CircularIndicatorTemplate } from '../../../weekend/src/CircularIndicator/CircularIndicator.story';

const story = createStory({
  title: 'GeCircularIndicator',
  component: GeCircularIndicator,
  argTypes: CircularIndicatorStoryConfig.argTypes,
});

export const Template: Story = (args) => <CircularIndicatorTemplate Component={GeCircularIndicator} ButtonComponent={GeCircularIndicatorButton} {...args} />;
Template.storyName = 'GeCircularIndicator';

export default story;
