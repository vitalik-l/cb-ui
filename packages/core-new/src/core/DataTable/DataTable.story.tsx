import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { DataTable, Column } from './index';

const story = createStory({
  title: 'DataTable',
  component: DataTable,
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
    ],
  },
});

export const Template: Story = (args) => (
  <DataTable {...args}>
    <Column source="id" label="ID" />
    <Column source="name" label="Name" />
  </DataTable>
);
Template.storyName = 'DataTable';

export default story;
