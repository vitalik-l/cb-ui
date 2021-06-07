import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Root } from '@cb-general/core/Root';
import { DesktopLayout } from './index';

const story = createStory({
  title: 'DesktopLayout',
  component: DesktopLayout,
});

export const Template: Story = (args) => (
  <Root>
    <DesktopLayout {...args} />
  </Root>
);
Template.storyName = 'DesktopLayout';

export default story;
