import React, {useState, useEffect} from 'react';
import ViewportContext from './ViewportContext';

function ResponsiveViewport({minRatio, maxRatio, timeout, children}) {
	const [viewport, setViewport] = useState({});

	useEffect(() => {
		const resizeFn = timeout ? resizeWithTimeout : resizeWithAnimationFrame;
		let preWindowSize = {};
		let isTicking;

		function resize(e) {
			const currentWindow = e ? e.target : window;
			const innerHeight = currentWindow.innerHeight;
			const innerWidth = currentWindow.innerWidth;
			if (preWindowSize.height !== innerHeight || preWindowSize.width !== innerWidth) {
				const curRatio = innerWidth/innerHeight;
				const viewportWidth = curRatio > maxRatio ? maxRatio * innerHeight : innerWidth;
				const viewportHeight = curRatio < minRatio ? innerWidth / minRatio : innerHeight;

				preWindowSize = {
					width: innerWidth,
					height: innerHeight
				};
				setViewport({viewportWidth, viewportHeight});
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

	return (
		<ViewportContext.Provider value={viewport}>
			{children}
		</ViewportContext.Provider>
	);
}

ResponsiveViewport.defaultProps = {
	timeout: 0
};

export default ResponsiveViewport;