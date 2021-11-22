import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { LabeledColumn } from './LabeledColumn';
import { Table } from './index';

const story = createStory({
  title: 'Table',
  component: Table,
  args: {
    data: [
      { ticket: 1, amount: 2, profit: 3 },
      { ticket: 2, amount: 2, profit: 3 },
    ],
    bordered: true,
  },
});

export const Template: Story = (args) => (
  <Table {...args}>
    <LabeledColumn label="ticket" source="ticket" />
    <LabeledColumn label="amount" source="amount" />
    <LabeledColumn label="profit" source="profit" />
  </Table>
);
Template.storyName = 'Table';

export default story;
