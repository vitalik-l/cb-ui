import React, {useEffect, useState} from 'react';

function useWindowResizeListener({timeout}) {
	const [size, setSize] = useState([]);

	useEffect(() => {
		const resizeFn = timeout ? resizeWithTimeout : resizeWithAnimationFrame;
		let preWindowSize = {};
		let isTicking;

		function resize(e) {
			const currentWindow = e ? e.target : window;
			const innerHeight = currentWindow.innerHeight;
			const innerWidth = currentWindow.innerWidth;
			if (preWindowSize.height !== innerHeight || preWindowSize.width !== innerWidth) {
				preWindowSize = {
					width: innerWidth,
					height: innerHeight
				};
				setSize([
					innerWidth,
					innerHeight
				]);
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

		window.addEventListener('resize', resizeFn, false);
		window.addEventListener('orientationchange', resizeFn, false);
		setTimeout(resize());

		return () => {
			window.removeEventListener('resize', resizeFn, false);
			window.removeEventListener('orientationchange', resizeFn, false);
		}
	}, []);

	return size;
}

export default useWindowResizeListener;