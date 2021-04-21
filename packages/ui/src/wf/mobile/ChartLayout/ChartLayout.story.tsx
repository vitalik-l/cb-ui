import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { ChartLayout } from './index';
import { IconButton } from '../../../flat/src/IconButton';
import { CircleMenuIcon } from '../../../flat/src/icons';

const story = createStory({
  title: 'ChartLayout',
  component: ChartLayout,
  style: {
    width: 150,
    height: 150,
  },
});

export const ChartLayoutTemplate: Story = () => (
  <ChartLayout
    menuButton={
      <IconButton>
        <CircleMenuIcon />
      </IconButton>
    }
  />
);
ChartLayoutTemplate.storyName = 'ChartLayout';

export default story;
