import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Switch } from './index';

const story = createStory({
  title: 'Switch',
  component: Switch,
});

export const Template: Story = () => {
  const [value, setValue] = React.useState(false);

  return <Switch value={value} onChange={setValue} />;
};
Template.storyName = 'Switch';

export default story;
