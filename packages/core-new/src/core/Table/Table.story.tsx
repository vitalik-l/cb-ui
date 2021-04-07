import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Table, Column } from './index';

const story = createStory({
  title: 'Table',
  component: Table,
  argTypes: {
    pager: {
      control: {
        type: null,
      },
    },
  },
  args: {
    data: [
      {
        id: 0,
        name: 'name 0',
      },
      {
        id: 1,
        name: 'name 1',
      },
      {
        id: 2,
        name: 'name 2',
      },
      {
        id: 3,
        name: 'name 3',
      },
      {
        id: 4,
        name: 'name 4',
      },
      {
        id: 5,
        name: 'name 5',
      },
    ],
  },
});

export const CoreTableStory: Story & { Component: React.FunctionComponent } = (args) => (
  <CoreTableStory.Component {...args} {...CoreTableStory.Component.defaultProps}>
    <Column source="id" label="ID" />
    <Column source="name" label="Name" />
  </CoreTableStory.Component>
);
CoreTableStory.Component = Table;
CoreTableStory.storyName = 'Table';

export default story;
