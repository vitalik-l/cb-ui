import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Tabs, Tab } from './index';

const story = createStory({
  title: 'Tabs',
  component: Tabs,
});

export const Template: Story = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs {...args} value={value} onChange={setValue}>
      <Tab>Open Orders</Tab>
      <Tab>Closed Orders</Tab>
    </Tabs>
  );
};
Template.storyName = 'Tabs';

export default story;
