import { useEffect, useState } from 'react';

function useWindowResizeListener({ timeout }) {
  const [size, setSize] = useState([]);

  useEffect(() => {
    let preWindowSize = {};
    let isTicking;

    function resize(e) {
      const currentWindow = e ? e.target : window;

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

    function resizeWithTimeout(e) {
      clearTimeout(isTicking);
      isTicking = setTimeout(() => resize(e), timeout);
    }

    function resizeWithAnimationFrame(e) {
      if (isTicking) return;
      requestAnimationFrame(() => {
        resize(e);
        isTicking = false;
      });
      isTicking = true;
    }

    const resizeFn = timeout ? resizeWithTimeout : resizeWithAnimationFrame;

    window.addEventListener('resize', resizeFn, false);
    window.addEventListener('orientationchange', resizeFn, false);
    setTimeout(resize());

    return () => {
      window.removeEventListener('resize', resizeFn, false);
      window.removeEventListener('orientationchange', resizeFn, false);
    };
  }, [timeout]);

  return size;
}

export default useWindowResizeListener;
