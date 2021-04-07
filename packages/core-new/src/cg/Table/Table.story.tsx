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

export { CoreTableStory };
CoreTableStory.Component = ClassicTable;
CoreTableStory.storyName = 'Table';

export default story;
