import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Table, SelectableRow } from './index';
import { Column } from '../../core/src/Table';

const story = createStory({
  title: 'Table',
  component: Table,
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
  <Table {...args} {...Table.defaultProps}>
    <Column source="id" label="ID" />
    <Column source="name" label="Name" />
  </Table>
);

export const Selectable: Story = (args) => (
  <Table row={<SelectableRow source="selected" />} {...args} {...Table.defaultProps}>
    <Column source="id" label="ID" />
    <Column source="name" label="Name" />
  </Table>
);

export default story;
