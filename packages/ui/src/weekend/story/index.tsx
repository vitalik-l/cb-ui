import { createStoryFactory } from '@cb-general/core/createStoryFactory';
import styles from '../src/styles/WeekendStory.module.scss';

const { createStory: index } = createStoryFactory({
  titlePrefix: 'weekend/',
  defaultStyle: { fontSize: '1rem' },
  className: styles.root,
});

export { index };
