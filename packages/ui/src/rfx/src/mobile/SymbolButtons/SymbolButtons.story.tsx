import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { SymbolButtons } from './index';
import { SymbolButton } from '../SymbolButton';

const story = createStory({
  title: 'mobile/SymbolButtons',
  component: SymbolButtons,
  style: {
    width: '19rem',
  },
});

export const SymbolButtonsTemplate: Story = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <SymbolButtons value={value} onChange={setValue}>
      <SymbolButton>RED/BLACK</SymbolButton>
      <SymbolButton>ODD/EVEN</SymbolButton>
      <SymbolButton>LOW/HIGH</SymbolButton>
    </SymbolButtons>
  );
};
SymbolButtonsTemplate.storyName = 'SymbolButtons';

export default story;
