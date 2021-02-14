export const createStory = ({ title, ...params }: any) => ({
  title: `Core/${title}`,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  ...params,
});
