import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameRounds } from './index';

const story = createStory({
  title: 'GameRounds',
  component: GameRounds,
});

export const GameRoundsTemplate: Story = (args) => {
  const [value, setValue] = React.useState(1);

  return <GameRounds {...args} value={value} onChange={setValue} />;
};
GameRoundsTemplate.storyName = 'GameRounds';

export default story;
