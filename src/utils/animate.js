import BezierEasing from 'bezier-easing';

const easeInOutSin = (time) => (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;

export const animate = ({
  timing = BezierEasing(0.25, 0.1, 0.25, 1.0),
  draw,
  duration,
}) => {
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };

  const start = performance.now();

  const step = (time) => {
    if (cancelled) {
      return;
    }
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    const progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);

  return cancel;
};

export const animateProperty = (
  property,
  element,
  to,
  options = {},
  cb = () => {},
) => {
  const {
    ease = easeInOutSin,
    duration = 300, // standard
  } = options;

  let start = null;
  const from = element[property];
  let cancelled = false;

  const cancel = () => {
    cancelled = true;
  };

  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }

    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);

    element[property] = ease(time) * (to - from) + from;

    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }

    requestAnimationFrame(step);
  };

  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
};
