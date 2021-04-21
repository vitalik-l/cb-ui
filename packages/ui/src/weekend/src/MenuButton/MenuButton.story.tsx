import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { MenuButton } from './MenuButton';

const story = index({
  title: 'MenuButton',
  component: MenuButton,
});

const Template = (args: any) => <MenuButton {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = 'MenuButton';

export default story;
