// fix for Preact. Remove the 'class' prop
export const clearProps = ({ class: className, ...restProps }: any) => restProps;
