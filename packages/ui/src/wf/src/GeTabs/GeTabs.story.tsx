import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GeTabs, GeTab } from './index';

const story = createStory({
  title: 'GeTabs',
  component: GeTabs,
});

export const GeTabsTemplate: Story = () => {
  const [value, setValue] = React.useState(0);

  return (
    <GeTabs onChange={setValue} value={value}>
      <GeTab label="my open trades" />
      <GeTab label="my closed trades" />
      <GeTab label="settings" />
    </GeTabs>
  );
};
GeTabsTemplate.storyName = 'GeTabs';

export default story;
