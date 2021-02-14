import React from 'react';

// local files
import { createStory } from '../createStory';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

const story = createStory({
  title: 'Tabs',
  component: createStory,
});

export const Template = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Tabs onChange={setValue} value={value}>
      <Tab value={0} label="1" />
      <Tab value={1} label="2" />
      <Tab value={2} label="3" />
    </Tabs>
  );
};
Template.storyName = 'Tabs';

export default story;
