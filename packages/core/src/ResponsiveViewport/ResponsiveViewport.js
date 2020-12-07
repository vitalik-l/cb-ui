import React from 'react';
import PropTypes from 'prop-types';
import ViewportContext from './ViewportContext';
import useWindowResizeListener from '../hooks/useWindowResizeListener';
import useViewportByRatio from '../hooks/useViewportByRatio';

function ResponsiveViewport({ minRatio, maxRatio, timeout, children, horizontal, vertical }) {
  const [windowWidth, windowHeight] = useWindowResizeListener({ timeout });
  const [viewportWidth, viewportHeight] = useViewportByRatio({
    min: minRatio,
    max: maxRatio,
    horizontal,
    vertical,
    windowWidth,
    windowHeight,
  });

  return (
    <ViewportContext.Provider value={{ viewportWidth, viewportHeight }}>
      {children}
    </ViewportContext.Provider>
  );
}

ResponsiveViewport.propTypes = {
  timeout: PropTypes.number,
  minRatio: PropTypes.number,
  maxRatio: PropTypes.number,
  children: PropTypes.node,
  horizontal: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
  vertical: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
};

ResponsiveViewport.defaultProps = {
  timeout: 0,
};

export default ResponsiveViewport;
