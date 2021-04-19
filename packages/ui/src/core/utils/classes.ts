export const classOption = (root?: string, value?: string) => {
  if (root && value) {
    return root.split(' ').map((className) => `${className}_${value}`);
  }
};
