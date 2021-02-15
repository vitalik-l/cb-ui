const isMobile = require('ismobilejs')();

export const inIframe = (() => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
})();

export const isIOSSafari = (() => {
  return isMobile.apple.device && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent);
})();

export const resetScrollPosition = (() => {
  let scrollPositionTimeoutId = 0;

  return (timeout = 1000, currentWindow = window) => {
    window.clearTimeout(scrollPositionTimeoutId);
    scrollPositionTimeoutId = window.setTimeout(() => {
      currentWindow.scrollTo(0, 0);
      currentWindow.document.documentElement.scrollTop = 0;
      currentWindow.document.body.scrollTop = 0;
    }, timeout);
  };
})();

if (isMobile.apple.device) document.documentElement.classList.add('ios');
if (isMobile.apple.phone) document.documentElement.classList.add('phone');
if (inIframe) document.documentElement.classList.add('iframe');
