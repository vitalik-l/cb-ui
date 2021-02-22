import React from 'react';

export const useSubmit = (ref: any) =>
  React.useCallback(() => {
    ref.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }, [ref]);
