import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { DataTable, SelectableRow } from './index';
import { Column } from '../../core/Table';

const story = createStory({
  title: 'DataTable',
  component: DataTable,
  args: {
    data: [
      {
        id: 0,
        name: 'name 0',
        selected: true,
      },
      {
        id: 1,
        name: 'name 1',
      },
      {
        id: 2,
        name: 'name 2',
      },
    ],
  },
});

export const Default: Story = (args) => (
  <DataTable {...args}>
    <Column source="id" label="ID" />
    <Column source="name" label="Name" />
  </DataTable>
);

export const Selectable: Story = (args) => (
  <DataTable row={<SelectableRow source="selected" />} {...args}>
    <Column source="id" label="ID" />
    <Column source="name" label="Name" />
  </DataTable>
);

export default story;
