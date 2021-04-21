import React from 'react';

export const createStoryFactory = ({
  titlePrefix = '',
  defaultStyle = {},
  className = '',
  ...parameters
}) => {
  const StoryContainer = ({ children }: any) => {
    React.useLayoutEffect(() => {
      document.documentElement.classList.add(className);

      return () => {
        document.documentElement.classList.remove(className);
      };
    }, []);

    return children;
  };

  const decorators = [(Story: any) => <StoryContainer>{Story()}</StoryContainer>];

  const applyDecorators = (storyContainer: boolean, style: any) => {
    const result = [];
    if (storyContainer) {
      result.push(...decorators);
    }
    if (style) {
      result.push((Story: any) => <div style={{ ...defaultStyle, ...style }}>{Story()}</div>);
    }
    return result;
  };

  const createStory = ({ title, storyContainer = true, style = {}, ...params }: any) => ({
    title: `${titlePrefix}${title}`,
    decorators: applyDecorators(storyContainer, style),
    ...parameters,
    ...params,
  });

  return {
    createStory,
    decorators,
    StoryContainer,
  };
};
