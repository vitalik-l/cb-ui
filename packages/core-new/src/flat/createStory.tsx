import React from 'react';

const decorators: any = [];

const applyDecorators = (storyContainer: boolean, style: any) => {
  const result = [];
  if (storyContainer) {
    result.push(...decorators);
  }
  if (style) {
    result.push((Story: any) => (
      <div style={style}>
        <Story />
      </div>
    ));
  }
  return result;
};

export const createStory = ({ title, storyContainer = false, style = {}, ...params }: any) => ({
  title: `core/${title}`,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  decorators: applyDecorators(storyContainer, style),
  ...params,
});
