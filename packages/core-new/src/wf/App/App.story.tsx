import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { App } from './App';

const story = createStory({
  title: 'App',
  component: App,
});

const Template = (args: any) => <App {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = 'App';

export default story;
