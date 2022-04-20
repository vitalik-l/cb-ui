import React from 'react';
import { Story } from '@storybook/react';
// local files
import { createStory } from '../../story';
import { Menu, MenuContent } from '../Menu';
import { GameLink } from './index';

const story = createStory({
  title: 'GameLink',
  component: GameLink,
});

export const Template: Story = () => (
  <Menu open>
    <MenuContent>
      <GameLink game="galileo" active />
      <GameLink game="wallstbaccarat" />
      <GameLink game="roulettefx" />
      <GameLink game="wallstroulette" />
      <GameLink game="weekendbinary" />
      <GameLink game="weekendforex" />
    </MenuContent>
  </Menu>
);
Template.storyName = 'GameLink';

export default story;
