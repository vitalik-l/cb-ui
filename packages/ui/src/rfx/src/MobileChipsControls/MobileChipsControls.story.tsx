import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { MobileChipsControls } from './index';
import {Chip} from '../../../weekend/src/Chip';

const story = createStory({
  title: 'MobileChipsControls',
  component: MobileChipsControls,
});

export const MobileChipsControlsTemplate: Story = (args) => {
  const [value, setValue] = React.useState(1);

  return (
    <MobileChipsControls {...args} value={value} onChange={setValue}>
      <Chip value={1} large />
      <Chip value={5} large />
      <Chip value={10} large />
      <Chip value={25} large />
      <Chip value={100} large />
    </MobileChipsControls>
  );
};
MobileChipsControlsTemplate.storyName = 'MobileChipsControls';

export default story;
