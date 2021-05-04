import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { MobileChipsControls } from './index';

const story = createStory({
  title: 'MobileChipsControls',
  component: MobileChipsControls,
});

export const Template: Story = (args) => <MobileChipsControls {...args} />;
Template.storyName = 'MobileChipsControls';

export default story;
