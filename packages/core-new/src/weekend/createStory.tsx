import React from 'react';

// local files
import classes from './styles/classes.module.scss';
import './styles/Styles.story.scss';

export const StoryContainer = ({ children }: any) => {
  React.useLayoutEffect(() => {
    document.documentElement.classList.add(classes.Story);

    return () => {
      document.documentElement.classList.remove(classes.Story);
    };
  }, []);

  return children;
};

export const decorators = [
  (Story: any) => (
    <StoryContainer>
      {Story()}
    </StoryContainer>
  ),
];

const applyDecorators = (storyContainer: boolean, style: any) => {
  const result = [];
  if (storyContainer) {
    result.push(...decorators);
  }
  if (style) {
    result.push((Story: any) => (
      <div style={{ fontSize: '1rem', ...style }}>
        {Story()}
      </div>
    ));
  }
  return result;
};

export const createStory = ({ title, storyContainer = true, style = {}, ...params }: any) => ({
  title: `weekend/${title}`,
  decorators: applyDecorators(storyContainer, style),
  ...params,
});
