import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameLink } from './index';
import { Menu, MenuContent } from '../Menu';

const story = createStory({
  title: 'GameLink',
  component: GameLink,
});

export const Template: Story = () => (
  <Menu open>
    <MenuContent>
      <GameLink game="wallstbaccarat" active />
      <GameLink game="roulettefx" />
      <GameLink game="wallstroulette" />
      <GameLink game="weekendbinary" />
      <GameLink game="weekendforex" />
    </MenuContent>
  </Menu>
);
Template.storyName = 'GameLink';

export default story;
