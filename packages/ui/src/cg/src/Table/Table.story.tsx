import { Story } from '@storybook/react';
// local files
import { createStory } from '../../story';
import { ClassicTable, Table } from './index';
import CoreTableStoryConfig, { CoreTableStory } from '../../../core/src/Table/Table.story';

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
