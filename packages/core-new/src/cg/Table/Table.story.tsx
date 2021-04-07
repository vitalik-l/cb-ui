import { Story } from '@storybook/react';
// local files
import { createStory } from '../createStory';
import { ClassicTable } from './index';
import CoreTableStoryConfig, { CoreTableStory } from '../../core/Table/Table.story';

const story = createStory({
  title: 'Table',
  component: ClassicTable,
  args: CoreTableStoryConfig.args,
  argTypes: CoreTableStoryConfig.argTypes,
});

const ClassicTableStoryTemplate: Story = (args) => <CoreTableStory Component={ClassicTable} {...args} />;

export { ClassicTableStoryTemplate };
ClassicTableStoryTemplate.storyName = 'Table';

export default story;
