import packageJson from '../package.json';
import { createStoryFactory } from '../../createStoryFactory';
import styles from './story.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: `weekend ${packageJson.version}/`,
  defaultStyle: { fontSize: '1rem' },
  className: styles.root,
});

export { createStory };
