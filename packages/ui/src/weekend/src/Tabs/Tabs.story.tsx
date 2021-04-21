import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

const story = index({
  title: 'Tabs',
  component: index,
});

export const TabsTemplate: Story = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs onChange={setValue} value={value}>
      <Tab value={0} label="my open trades" />
      <Tab value={1} label="my closed trades" />
      <Tab value={2} label="settings" />
    </Tabs>
  );
};
TabsTemplate.storyName = 'Tabs';

export default story;
