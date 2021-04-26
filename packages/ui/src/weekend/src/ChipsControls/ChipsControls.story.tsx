import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ChipsControls } from './index';
import { Chip } from '../Chip';

const story = createStory({
  title: 'ChipsControls',
  component: ChipsControls,
  style: {
    marginTop: '4em',
  },
});

export const ChipsControlsTemplate: Story = (args) => {
  const [value, setValue] = React.useState(1);

  return (
    <ChipsControls {...args} value={value} onChange={setValue}>
      <Chip value={1} />
      <Chip value={5} />
      <Chip value={10} />
      <Chip value={25} />
      <Chip value={100} />
    </ChipsControls>
  );
};
ChipsControlsTemplate.storyName = 'ChipsControls';

export default story;
