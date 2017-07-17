let transitionEndEvent;
if('ontransitionend' in window) {
	// Firefox
	transitionEndEvent = 'transitionend';
} else if('onwebkittransitionend' in window) {
	// Chrome/Saf (+ Mobile Saf)/Android
	transitionEndEvent = 'webkitTransitionEnd';
} else if('onotransitionend' in window || navigator.appName == 'Opera') {
	// Opera
	// As of Opera 10.61, there is no "onotransitionend" property added to DOM elements,
	// so it will always use the navigator.appName fallback
	transitionEndEvent = 'oTransitionEnd';
} else {
	// IE - not implemented (even in IE9) :(
	transitionEndEvent = false;
}

export {transitionEndEvent};
var a;

let animationEndEvent;
if('onanimationend' in window) {
	// Firefox
	animationEndEvent = 'animationend';
} else if('onwebkitanimationend' in window) {
	// Chrome/Saf (+ Mobile Saf)/Android
	animationEndEvent = 'webkitAnimationEnd';
} else if('onoanimationend' in window || navigator.appName == 'Opera') {
	// Opera
	// As of Opera 10.61, there is no "onotransitionend" property added to DOM elements,
	// so it will always use the navigator.appName fallback
	animationEndEvent = 'oAnimationEnd';
} else {
	// IE - not implemented (even in IE9) :(
	animationEndEvent = false;
}

export {animationEndEvent};