import React from 'react';
import { Story } from '@storybook/react';
import { DataTable } from '@cb-general/core/DataTable';

// local files
import { createStory } from '../createStory';
import { TitledColumn } from './index';

const story = createStory({
  title: 'TitledColumn',
  component: TitledColumn,
});

export const Template: Story = () => (
  <DataTable data={[{ ticket: 1, amount: 2, profit: 3 }]}>
    <TitledColumn source="ticket" title="ticket" />
    <TitledColumn source="amount" title="amount" />
    <TitledColumn source="profit" title="profit" />
  </DataTable>
);
Template.storyName = 'TitledColumn';

export default story;
