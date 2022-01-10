import { Story } from '@storybook/react';
import CoreTableStoryConfig, { CoreTableStory } from '../../../core/src/Table/Table.story';
import { createStory } from '../../story';
import { ClassicTable, Table } from './index';

const story = createStory({
  title: 'Table',
  component: Table,
  args: CoreTableStoryConfig.args,
  argTypes: CoreTableStoryConfig.argTypes,
});

export const TableStoryTemplate: Story = (args) => <CoreTableStory Component={Table} {...args} />;
TableStoryTemplate.storyName = 'Table';

export const ClassicTableStory: Story = (args) => (
  <CoreTableStory Component={ClassicTable} {...args} />
);
ClassicTableStory.storyName = 'Classic';

export default story;
