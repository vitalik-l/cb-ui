import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Tab } from './Tab';
import { Tabs } from './Tabs';

const story = createStory({
  title: 'Tabs',
  component: Tabs,
  style: {
    width: 250,
  },
});

export const TabsTemplate: Story = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs onChange={setValue} value={value} {...args} scrollButtons="on">
      <Tab value={0} label="Deposit" />
      <Tab value={1} label="Withdraw" />
      <Tab value={1} label="Other Tab" />
      <Tab value={1} label="Other Tab 2" />
    </Tabs>
  );
};
TabsTemplate.storyName = 'Tabs';

export default story;
