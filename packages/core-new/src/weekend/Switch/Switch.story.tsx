import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Switch } from './index';

const story = createStory({
  title: 'Switch',
  component: Switch,
});

export const Template: Story = (args) => {
  const [value, setValue] = React.useState(false);

  return <Switch value={value} onChange={setValue} />;
};
Template.storyName = 'Switch';

export default story;
