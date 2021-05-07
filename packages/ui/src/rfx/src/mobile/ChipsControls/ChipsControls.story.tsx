import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { ChipsControls } from './index';
import { Chip } from '../../../../weekend/src/Chip';

const story = createStory({
  title: 'mobile/ChipsControls',
  component: ChipsControls,
});

export const ChipsControlsTemplate: Story = (args) => {
  const [value, setValue] = React.useState(1);

  return (
    <ChipsControls {...args} value={value} onChange={setValue}>
      <Chip value={1} large />
      <Chip value={5} large />
      <Chip value={10} large />
      <Chip value={25} large />
      <Chip value={100} large />
    </ChipsControls>
  );
};
ChipsControlsTemplate.storyName = 'ChipsControls';

export default story;
