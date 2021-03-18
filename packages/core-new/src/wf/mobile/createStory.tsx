import { createStoryFactory } from '../../core/createStoryFactory';

const { createStory } = createStoryFactory({
  titlePrefix: 'wf/mobile/',
  defaultStyle: { fontSize: '1rem' },
  className: 'WfMobileStory',
});

export { createStory };
