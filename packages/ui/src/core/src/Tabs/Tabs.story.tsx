import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

const story = createStory({
  title: 'Tabs',
  component: Tabs,
  style: {
    width: 100,
  },
});

export const Template: Story = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs onChange={setValue} value={value} {...args}>
      <Tab value={0} label="Tab 1" />
      <Tab value={1} label="Tab 2" />
      <Tab value={2} label="Tab 3" />
      <Tab value={2} label="Tab 4" />
      <Tab value={2} label="Tab 5" />
    </Tabs>
  );
};
Template.storyName = 'Tabs';

export default story;
