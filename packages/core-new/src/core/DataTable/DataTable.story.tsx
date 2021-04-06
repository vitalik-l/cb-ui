import React from 'react';
import { Story } from '@storybook/react';
import { DataTable, Column } from '@cb-general/core/DataTable';

// local files
import { createStory } from '../createStory';

const story = createStory({
  title: 'DataTable',
  component: DataTable,
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

export const CoreDataTableStory: Story & { Component: React.FunctionComponent } = (args) => (
  <CoreDataTableStory.Component {...args} {...CoreDataTableStory.Component.defaultProps}>
    <Column source="id" label="ID" />
    <Column source="name" label="Name" />
  </CoreDataTableStory.Component>
);
CoreDataTableStory.Component = DataTable;
CoreDataTableStory.storyName = 'DataTable';

export default story;
