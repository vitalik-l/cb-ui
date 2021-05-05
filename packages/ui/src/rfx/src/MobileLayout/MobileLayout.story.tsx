import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { MobileLayout } from './index';
import { Root } from '../../../core/src/Root';

const story = createStory({
  title: 'MobileLayout',
  component: MobileLayout,
});

export const Template: Story = (args) => (
  <Root>
    <MobileLayout {...args} />
  </Root>
);
Template.storyName = 'MobileLayout';

export default story;
