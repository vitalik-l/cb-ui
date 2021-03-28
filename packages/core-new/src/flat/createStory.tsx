import React from 'react';

// local files
import styles from './styles/StoryStyles.module.scss';

export const StoryContainer = ({ children }: any) => {
  React.useLayoutEffect(() => {
    document.documentElement.classList.add(styles.root);

    return () => {
      document.documentElement.classList.remove(styles.root);
    };
  }, []);

  return children;
};

export const decorators = [(Story: any) => <StoryContainer>{Story()}</StoryContainer>];

const applyDecorators = (storyContainer: boolean, style: any) => {
  const result = [];
  if (storyContainer) {
    result.push(...decorators);
  }
  if (style) {
    result.push((Story: any) => <div style={{ fontSize: '1rem', ...style }}>{Story()}</div>);
  }
  return result;
};

export const createStory = ({ title = '', storyContainer = true, style = {}, ...params }) => ({
  title: `flat/${title}`,
  decorators: applyDecorators(storyContainer, style),
  ...params,
});
