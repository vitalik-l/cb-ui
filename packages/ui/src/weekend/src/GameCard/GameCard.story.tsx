import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { GameCard } from './GameCard';

const story = index({
  title: 'GameCard',
  component: GameCard,
  argTypes: {
    value: { control: 'text' },
    back: { control: 'boolean' },
  },
  args: {
    value: 'A',
    suit: 'clubs',
  },
});

const Template = ({ back, ...args }: any) => {
  return <GameCard {...args} style={back ? { transform: 'rotateY(0)' } : undefined} />;
};

export const Default: Story = Template.bind({});
Default.storyName = 'GameCard';

export default story;
