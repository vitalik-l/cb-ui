import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

const story = createStory({
  title: 'Tabs',
  component: Tabs,
});

export const TabsTemplate: Story = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs onChange={setValue} value={value}>
      <Tab value={0} label="Deposit" />
      <Tab value={1} label="Withdraw" />
    </Tabs>
  );
};
TabsTemplate.storyName = 'Tabs';

export default story;
