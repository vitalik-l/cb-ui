import React from 'react';

export const useThrottle = (fn: (...args: any) => any, timeout: number = 1000) => {
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
      }, timeout);

      return fnResult;
    },
    [fn, timeout],
  );
};

export const useThrottleWithState = (fn: (...args: any) => any, timeout: number = 1000) => {
  const [called, setCalled] = React.useState(false);

  const callback = React.useCallback(
    (...args) => {
      if (called) return undefined;

      const fnResult = fn(...args);
      setCalled(true);

      setTimeout(() => {
        if (called) {
          setCalled(false);
        }
      }, timeout);

      return fnResult;
    },
    [fn, timeout],
  );

  return [callback, called];
};
