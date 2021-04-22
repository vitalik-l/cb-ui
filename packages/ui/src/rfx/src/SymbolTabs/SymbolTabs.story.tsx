import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { SymbolTabs, SymbolTab } from './index';

const story = createStory({
  title: 'SymbolTabs',
  component: SymbolTabs,
});

export const SymbolTabsTemplate: Story = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <SymbolTabs {...args} onChange={setValue} value={value}>
      <SymbolTab label="RED/BLACK" />
      <SymbolTab label="ODD/EVEN" />
      <SymbolTab label="LOW/HIGH" />
    </SymbolTabs>
  );
};
SymbolTabsTemplate.storyName = 'SymbolTabs';

export default story;
