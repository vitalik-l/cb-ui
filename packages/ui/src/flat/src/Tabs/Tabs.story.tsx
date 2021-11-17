import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { ClassicTab, ClassicTabs } from './ClassicTabs';

const story = createStory({
  title: 'Tabs',
  component: Tabs,
  style: {
    width: 250,
  }
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

export const Classic: Story = () => {
  const [value, setValue] = React.useState(0);

  return (
    <ClassicTabs onChange={setValue} value={value}>
      <ClassicTab label="Deposit" />
      <ClassicTab label="Withdraw" />
    </ClassicTabs>
  );
};

export default story;
