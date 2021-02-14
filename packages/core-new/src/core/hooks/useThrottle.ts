import React from 'react';

export const useThrottle = (fn: (...args: any) => any, time: number = 0) => {
  const called = React.useRef(false);

  return React.useCallback(
    (...args) => {
      if (called.current) return undefined;

      const fnResult = fn(...args);
      called.current = true;

      setTimeout(() => {
        if (called.current) {
          called.current = false;
        }
      }, time);

      return fnResult;
    },
    [fn, time],
  );
};
