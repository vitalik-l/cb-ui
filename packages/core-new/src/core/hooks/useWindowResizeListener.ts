import { useEffect, useState } from 'react';

export const useWindowResizeListener = ({ timeout = 0 }: { timeout: number }) => {
  const [size, setSize] = useState<number[]>([]);

  useEffect(() => {
    let preWindowSize = { height: 0, width: 0 };
    let isTicking: any;

    function resize(event: any) {
      const currentWindow = event ? event.target : window;

      // don't resize when keyboard opens on android device
      // https://stackoverflow.com/questions/33673376/prevent-document-reflow-browser-resize-when-android-keyboard-opens
      const { activeElement } = currentWindow.document;
      if (
        activeElement &&
        (activeElement.getAttribute('type') === 'text' ||
          activeElement.tagName.toLowerCase() === 'textarea')
      ) {
        return;
      }

      const { innerHeight } = currentWindow;
      const { innerWidth } = currentWindow;
      if (preWindowSize.height !== innerHeight || preWindowSize.width !== innerWidth) {
        preWindowSize = {
          width: innerWidth,
          height: innerHeight,
        };
        setSize([innerWidth, innerHeight]);
      }
    }

    function resizeWithTimeout(event: any) {
      clearTimeout(isTicking);
      isTicking = setTimeout(() => resize(event), timeout);
    }

    function resizeWithAnimationFrame(event: any) {
      if (isTicking) return;
      requestAnimationFrame(() => {
        resize(event);
        isTicking = false;
      });
      isTicking = true;
    }

    const resizeFn = timeout ? resizeWithTimeout : resizeWithAnimationFrame;

    window.addEventListener('resize', resizeFn, false);
    window.addEventListener('orientationchange', resizeFn, false);
    setTimeout(resize);

    return () => {
      window.removeEventListener('resize', resizeFn, false);
      window.removeEventListener('orientationchange', resizeFn, false);
    };
  }, [timeout]);

  return size;
};
