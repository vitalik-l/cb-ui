import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Logo } from './Logo';

const story = createStory({
  title: 'Logo',
  component: Logo,
});

const Template = (args: any) => <Logo {...args} style={{ width: 300, height: 100 }} />;

export const Default: Story = Template.bind({});
Default.storyName = 'Logo';

export default story;
