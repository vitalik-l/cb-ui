import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Switch } from './index';

const story = index({
  title: 'Switch',
  component: Switch,
});

export const Template: Story = () => {
  const [value, setValue] = React.useState(false);

  return <Switch value={value} onChange={setValue} />;
};
Template.storyName = 'Switch';

export default story;
