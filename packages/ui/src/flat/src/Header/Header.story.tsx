import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Header } from './index';

const story = createStory({
  title: 'Header',
  component: Header,
  style: {
    background: '#000',
  },
});

export const Template: Story = () => (
  <Header
    leftContent={<div>Left Content</div>}
    centerContent={<div>Center Content</div>}
    rightContent={<div>Right Content</div>}
  />
);
Template.storyName = 'Header';

export default story;
