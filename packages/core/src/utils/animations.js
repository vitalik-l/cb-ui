const obj = {};

if ('ontransitionend' in window) {
  // Firefox
  obj.transitionEndEvent = 'transitionend';
} else if ('onwebkittransitionend' in window) {
  // Chrome/Saf (+ Mobile Saf)/Android
  obj.transitionEndEvent = 'webkitTransitionEnd';
} else if ('onotransitionend' in window || navigator.appName === 'Opera') {
  // Opera
  // As of Opera 10.61, there is no "onotransitionend" property added to DOM elements,
  // so it will always use the navigator.appName fallback
  obj.transitionEndEvent = 'oTransitionEnd';
} else {
  // IE - not implemented (even in IE9) :(
  obj.transitionEndEvent = 'transitionend';
}

if ('onanimationend' in window) {
  // Firefox
  obj.animationEndEvent = 'animationend';
} else if ('onwebkitanimationend' in window) {
  // Chrome/Saf (+ Mobile Saf)/Android
  obj.animationEndEvent = 'webkitAnimationEnd';
} else if ('onoanimationend' in window || navigator.appName === 'Opera') {
  // Opera
  // As of Opera 10.61, there is no "onotransitionend" property added to DOM elements,
  // so it will always use the navigator.appName fallback
  obj.animationEndEvent = 'oAnimationEnd';
} else {
  // IE - not implemented (even in IE9) :(
  obj.animationEndEvent = 'animationend';
}

export const { animationEndEvent, transitionEndEvent } = obj;
