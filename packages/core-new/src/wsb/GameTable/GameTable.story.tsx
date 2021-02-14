import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { GameTable } from './GameTable';
import { GameTableCards } from './GameTableCards';
import { GameCard } from '../../weekend/GameCard';

const story = createStory({
  title: 'GameTable',
  component: GameTable,
  argTypes: {
    showCards: { control: 'boolean' },
  },
});

const Template = (args: any) => {
  const { showCards, ...otherArgs } = args;
  const playerCards: Array<any> = showCards ? [{ suit: 'clubs', value: 6 }] : [];

  return (
    <GameTable {...otherArgs}>
      <GameTableCards>
        {playerCards.map(({ suit, value }, index) => (
          <GameCard suit={suit} value={value} key={`${suit}${value}${index}`} />
        ))}
      </GameTableCards>
    </GameTable>
  );
};

export const Default: Story = Template.bind({});
Default.storyName = 'GameTable';

export default story;
