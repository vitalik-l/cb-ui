import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { TradeRow } from './index';
import { Table } from '@cb-general/flat/Table';
import { TitledColumn } from '@cb-general/flat/TitledColumn';

const story = createStory({
  title: 'mobile/TradeRow',
  component: TradeRow,
});

export const Empty: Story = () => <TradeRow />;
export const WithData: Story = () => (
  <TradeRow>
    <Table data={[{ ticket: 1, amount: 2, profit: 3 }]}>
      <TitledColumn title="ticket" source="ticket" />
      <TitledColumn title="amount" source="amount" />
      <TitledColumn title="profit" source="profit" />
    </Table>
  </TradeRow>
);

export default story;
