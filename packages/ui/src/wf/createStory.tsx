import { createStoryFactory } from '@cb-general/core/createStoryFactory';
import styles from './styles/WfStory.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'wf/',
  defaultStyle: { fontSize: '1rem' },
  className: styles.root,
});

export { createStory };
