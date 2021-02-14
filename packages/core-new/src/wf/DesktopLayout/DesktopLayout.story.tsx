import React from 'react';
import { Story } from '@storybook/react';
import { Root } from '@cb-general/core/Root';

// local files
import { createStory } from '../createStory';
import { DesktopLayout } from './index';
import { HeaderTemplate } from '../Header/Header.story';

const story = createStory({
  title: 'DesktopLayout',
  component: DesktopLayout,
});

export const Template: Story = (args) => (
  <Root>
    <DesktopLayout
      {...args}
      header={<HeaderTemplate />}
    />
  </Root>
);
Template.storyName = 'DesktopLayout';

export default story;
