import React from 'react';

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */
export const useEventCallback = (fn: any) => {
  const ref = React.useRef(fn);
  React.useLayoutEffect(() => {
    ref.current = fn;
  });
  // @ts-ignore
  return React.useCallback((...args) => (0, ref.current)(...args), []);
};
