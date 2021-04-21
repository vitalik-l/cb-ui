// Corresponds to 10 frames at 60 Hz.
export const debounce = (func: (...args: any) => any, wait = 166) => {
  let timeout = 0;
  const debounced = (...args: any) => {
    const later = () => {
      func(...args);
    };
    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
  };

  debounced.clear = () => {
    window.clearTimeout(timeout);
  };

  return debounced;
};
