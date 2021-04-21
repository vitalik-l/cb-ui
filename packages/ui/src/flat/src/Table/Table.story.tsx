import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Table } from './index';
import { TitledColumn } from '../TitledColumn';

const story = createStory({
  title: 'Table',
  component: Table,
});

export const Template: Story = (args) => (
  <Table {...args} data={[{ ticket: 1, amount: 2, profit: 3 }]}>
    <TitledColumn title="ticket" source="ticket" />
    <TitledColumn title="amount" source="amount" />
    <TitledColumn title="profit" source="profit" />
  </Table>
);
Template.storyName = 'Table';

export default story;
