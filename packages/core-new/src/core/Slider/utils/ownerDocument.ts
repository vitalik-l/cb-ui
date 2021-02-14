export const ownerDocument = (node: any) => {
  return (node && node.ownerDocument) || document;
};
