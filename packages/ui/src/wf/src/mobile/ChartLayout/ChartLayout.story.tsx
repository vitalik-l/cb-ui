import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { ChartLayout } from './index';
import { IconButton } from '@cb-general/flat/IconButton';
import { CircleMenuIcon } from '../../../../icons/src';

const story = createStory({
  title: 'mobile/ChartLayout',
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
