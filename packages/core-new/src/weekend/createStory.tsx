import { createStoryFactory } from '@cb-general/core/createStoryFactory';
import styles from './styles/WeekendStory.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'weekend/',
  defaultStyle: { fontSize: '1rem' },
  className: styles.root,
});

export { createStory };
