// local files
import packageJson from '../package.json';
import { createStoryFactory } from '../../createStoryFactory';
import styles from './story.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: `core ${packageJson.version}/`,
  className: styles.root,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
});

export { createStory };
