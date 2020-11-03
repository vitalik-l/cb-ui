import {useEffect, useState} from 'react';

const useResponsiveFontSize = ({baseFontSize, maxFontSize = 1000, minFontSize = 0, baseWidth, baseHeight, timeout = 100, viewportWidth, viewportHeight}) => {
	const [fontSize, setFontSize] = useState();

	useEffect(() => {
		function viewportResize() {
			let baseViewport = {width: baseWidth, height: baseHeight},
				goodRatio = baseViewport.width/baseViewport.height,
				currentRatio = viewportWidth/viewportHeight,
				calculateParam = goodRatio >= currentRatio ? 'height' : 'width',
				currentViewportParam = Math.floor(calculateParam === 'width' ? viewportHeight*goodRatio : viewportWidth/goodRatio),
				changeValuePercent = 100 - (100 - 100*(baseViewport[calculateParam] - currentViewportParam)/baseViewport[calculateParam]),
				fontSize = Math.max(minFontSize, Math.min(maxFontSize, baseFontSize - baseFontSize*(changeValuePercent/100))); // fontSize between min and max

			setFontSize(fontSize);
		}

		if (viewportHeight && viewportWidth) {
      const tId = setTimeout(viewportResize, timeout);

      return () => {
        clearTimeout(tId);
      }
		}
	}, [viewportHeight, viewportWidth, timeout]);

	return fontSize;
};

export default useResponsiveFontSize;