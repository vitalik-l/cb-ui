// local files
import { createStory } from '../createStory';
import { Table } from './index';
import CoreTableStory, { CoreDataTableStory } from '../../core/DataTable/DataTable.story';

const story = createStory({
  title: 'Table',
  component: Table,
  args: CoreTableStory.args,
  argTypes: CoreTableStory.argTypes,
});

export { CoreDataTableStory };
CoreDataTableStory.Component = Table;
CoreDataTableStory.storyName = 'Table';

export default story;
