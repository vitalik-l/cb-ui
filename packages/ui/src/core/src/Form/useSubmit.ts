import React from 'react';

export const useSubmit = (ref: any) =>
  React.useCallback(() => {
    // make it compatible with Preact. The refs works strange in Preact
    const node = ref.current instanceof Element ? ref.current : ref.current?.base;
    node.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }, [ref]);
