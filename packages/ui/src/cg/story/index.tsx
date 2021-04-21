import { createStoryFactory } from '../../createStoryFactory';
import styles from './story.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'cg/',
  defaultStyle: { fontSize: '1rem' },
  className: styles.root,
});

export { createStory };
