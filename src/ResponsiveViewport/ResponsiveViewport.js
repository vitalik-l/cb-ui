import React, {useState, useEffect} from 'react';
import ViewportContext from './ViewportContext';

let isTicking;
function ResponsiveViewport({minRatio, maxRatio, children}) {
	const [viewport, setViewport] = useState({});

	useEffect(() => {
		let preWindowSize = {};
		function resize(e) {
			if (isTicking) return;
			requestAnimationFrame(() => {
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

				// set isTicking
				isTicking = false;
			});
			isTicking = true;
		}

		window.addEventListener('resize', resize, false);
		window.addEventListener('orientationchange', resize, false);
		setTimeout(resize());

		return () => {
			window.removeEventListener('resize', resize, false);
			window.removeEventListener('orientationchange', resize, false);
		}
	}, []);

	return (
		<ViewportContext.Provider value={viewport}>
			{children}
		</ViewportContext.Provider>
	);
}

export default ResponsiveViewport;