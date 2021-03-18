// local files
import { createStoryFactory } from './createStoryFactory';
import classes from './styles/classes.module.scss';
import './styles/Styles.story.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'core/',
  className: classes.Story,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
});

export { createStory };
