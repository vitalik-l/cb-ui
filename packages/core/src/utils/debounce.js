// Corresponds to 10 frames at 60 Hz.
export const debounce = (func, wait = 166) => {
  let timeout = 0;
  const debounced = (...args) => {
    const later = () => {
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
};
