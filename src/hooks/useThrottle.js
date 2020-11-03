import React from 'react';

const useThrottle = (fn, time) => {
	const called = React.useRef(false);

	return React.useCallback((...args) => {
		if (called.current) return;

		const fnResult = fn(...args);
		called.current = true;

		setTimeout(() => {
			if (called.current) {
				called.current = false;
			}
		}, time);

		return fnResult;
	}, [fn, time]);
};

export default useThrottle;