import React from 'react';
import { Story } from '@storybook/react';
import { Root } from '@cb-general/core/Root';

// local files
import { createStory } from '../../../story';
import { AppLayout } from './index';
import { Header } from '@cb-general/flat/Header';
import { IconButton } from '@cb-general/flat/IconButton';
import { CircleMenuIcon, MenuIcon } from '../../../../icons/src';
import { Logo } from '../../Logo';
import { ChartLayout } from '../ChartLayout';
import { TradeRow } from '../TradeRow';

const story = createStory({
  title: 'mobile/AppLayout',
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
