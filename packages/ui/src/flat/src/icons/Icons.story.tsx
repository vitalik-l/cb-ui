import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import * as Icons from './index';

const story = createStory({
  title: 'Icons',
  style: {
    fontSize: '2.5rem',
  },
});

export const CloseIcon: Story = () => <Icons.CloseIcon />;
export const NavIcon: Story = () => <Icons.NavIcon />;
export const TrendIcon: Story = () => <Icons.TrendIcon />;
export const MenuIcon: Story = () => <Icons.MenuIcon />;
export const CircleMenuIcon: Story = () => <Icons.CircleMenuIcon />;
export const SelectIcon: Story = () => <Icons.SelectIcon />;

export default story;
