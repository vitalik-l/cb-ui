import { createStoryFactory } from '@cb-general/core/createStoryFactory';
import styles from './styles/CgStory.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'cg/',
  defaultStyle: { fontSize: '1rem' },
  className: styles.root,
});

export { createStory };
