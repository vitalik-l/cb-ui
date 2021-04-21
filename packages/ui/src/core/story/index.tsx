// local files
import { createStoryFactory } from '../../createStoryFactory';
import styles from './story.module.scss';

const { createStory: index } = createStoryFactory({
  titlePrefix: 'core/',
  className: styles.root,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
});

export { index };
