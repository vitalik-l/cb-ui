import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Logo } from './Logo';

const story = createStory({
  title: 'Logo',
  component: Logo,
});

const Template = (args: any) => <Logo {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = 'Logo';

export default story;
