import React from 'react';
import { Story } from '@storybook/react';
import { Root } from '@cb-general/core/Root';

// local files
import { createStory } from '../createStory';
import { AppLayout } from './index';
import { Header } from '../../../flat/src/Header';
import { IconButton } from '../../../flat/src/IconButton';
import { CircleMenuIcon, MenuIcon } from '../../../flat/src/icons';
import { Logo } from '../../Logo';
import { ChartLayout } from '../ChartLayout';
import { TradeRow } from '../TradeRow';

const story = createStory({
  title: 'AppLayout',
  component: AppLayout,
});

export const Template: Story = () => (
  <Root>
    <AppLayout
      header={
        <Header
          leftContent={
            <IconButton>
              <MenuIcon />
            </IconButton>
          }
          centerContent={<Logo small />}
        />
      }
      chart={
        <ChartLayout
          menuButton={
            <IconButton>
              <CircleMenuIcon />
            </IconButton>
          }
        />
      }
      controls={
        <div>
          <TradeRow />
        </div>
      }
    />
  </Root>
);
Template.storyName = 'AppLayout';

export default story;
