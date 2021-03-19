import React from 'react';
import { Story } from '@storybook/react';
import { Root } from '@cb-general/core/Root';

// local files
import { createStory } from '../createStory';
import { AppLayout } from './index';
import { Header } from '../../../flat/Header';
import { IconButton } from '../../../flat/IconButton';
import { MenuIcon } from '../../../flat/icons';
import { Logo } from '../../Logo';

const story = createStory({
  title: 'AppLayout',
  component: AppLayout,
});

export const Template: Story = (args) => (
  <Root>
    <AppLayout
      header={
        <Header
          leftContent={
            <IconButton>
              <MenuIcon />
            </IconButton>
          }
          centerContent={
            <Logo small />
          }
        />
      }
    />
  </Root>
);
Template.storyName = 'AppLayout';

export default story;
