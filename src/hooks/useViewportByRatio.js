import {useMemo} from 'react';

function useViewportByRatio({windowWidth, windowHeight, minRatio, maxRatio}) {
	return useMemo(() => {
		if (windowHeight && windowWidth) {
			const curRatio = windowWidth/windowHeight;
			const viewportWidth = curRatio > maxRatio ? maxRatio * windowHeight : windowWidth;
			const viewportHeight = curRatio < minRatio ? windowWidth / minRatio : windowHeight;
			return [viewportWidth, viewportHeight];
		}
		return [];
	}, [windowWidth, windowHeight]);
}

export default useViewportByRatio;