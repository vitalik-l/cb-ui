import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Tabs, Tab } from './index';

const story = createStory({
  title: 'Tabs',
  component: Tabs,
});

export const TabsTemplate: Story = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs onChange={setValue} value={value}>
      <Tab label="my open trades" />
      <Tab label="my closed trades" />
      <Tab label="settings" />
    </Tabs>
  );
};
TabsTemplate.storyName = 'Tabs';

export default story;
