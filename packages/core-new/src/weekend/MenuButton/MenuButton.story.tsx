import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { MenuButton } from './MenuButton';

const story = createStory({
  title: 'MenuButton',
  component: MenuButton,
});

const Template = (args: any) => <MenuButton {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = 'MenuButton';

export default story;
