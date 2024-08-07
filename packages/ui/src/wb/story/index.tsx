// @ts-ignore
import packageJson from '../package.json';
// @ts-ignore
import { createStoryFactory } from '../../createStoryFactory';
import styles from './story.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: `wb ${packageJson.version}/`,
  defaultStyle: { fontSize: '1rem' },
  className: styles.root,
});

export { createStory };
