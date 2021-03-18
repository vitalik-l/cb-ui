import { createStoryFactory } from '../../core/createStoryFactory';
import classes from './styles/classes.module.scss';

const { createStory } = createStoryFactory({
  titlePrefix: 'wf/mobile/',
  defaultStyle: { fontSize: '1rem' },
  className: classes.Story,
});

export { createStory };
