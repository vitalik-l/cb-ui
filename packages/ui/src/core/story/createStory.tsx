// local files
import { createStoryFactory } from './createStoryFactory';
import styles from '../src/styles/Story.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'core/',
  className: styles.root,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
});

export { createStory };
