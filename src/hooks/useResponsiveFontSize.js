import {useEffect, useState} from 'react';

const useResponsiveFontSize = ({baseFontSize, maxFontSize = 1000, minFontSize = 0, baseWidth, baseHeight, timeout = 100, viewportWidth, viewportHeight}) => {
	const [fontSize, setFontSize] = useState();

	useEffect(() => {
		function viewportResize() {
			const baseViewport = {width: baseWidth, height: baseHeight};
      const goodRatio = baseViewport.width/baseViewport.height;
      const currentRatio = viewportWidth/viewportHeight;
      const calculateParam = goodRatio >= currentRatio ? 'height' : 'width';
      const currentViewportParam = Math.floor(calculateParam === 'width' ? viewportHeight*goodRatio : viewportWidth/goodRatio);
      const changeValuePercent = 100 - (100 - 100*(baseViewport[calculateParam] - currentViewportParam)/baseViewport[calculateParam]);
      const newFontSize = Math.max(minFontSize, Math.min(maxFontSize, baseFontSize - baseFontSize*(changeValuePercent/100))); // fontSize between min and max

			setFontSize(newFontSize);
		}

		if (viewportHeight && viewportWidth) {
      const tId = setTimeout(viewportResize, timeout);

      return () => {
        clearTimeout(tId);
      }
		}

		return undefined;
	}, [viewportHeight, viewportWidth, timeout, baseFontSize, baseWidth, baseHeight, maxFontSize, minFontSize]);

	return fontSize;
};

export default useResponsiveFontSize;