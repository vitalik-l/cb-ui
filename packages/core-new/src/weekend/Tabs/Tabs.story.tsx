import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

const story = createStory({
  title: 'Tabs',
  component: createStory,
});

const Template = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs onChange={setValue} value={value}>
      <Tab value={0} label="my open trades" />
      <Tab value={1} label="my closed trades" />
      <Tab value={2} label="settings" />
    </Tabs>
  );
};

export const Default: Story = Template.bind({});
Default.storyName = 'Tabs';

export default story;
