import { createStoryFactory } from '@cb-general/core/createStoryFactory';
import classes from './styles/classes.module.scss';
import './styles/Styles.story.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'cg/',
  defaultStyle: { fontSize: '1rem' },
  className: classes.Story,
});

export { createStory };
