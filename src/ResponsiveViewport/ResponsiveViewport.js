import React from 'react';
import PropTypes from 'prop-types';
import ViewportContext from './ViewportContext';
import useWindowResizeListener from '../hooks/useWindowResizeListener';
import useViewportByRatio from '../hooks/useViewportByRatio';

function ResponsiveViewport({
  minRatio, maxRatio, timeout, children,
}) {
  const [windowWidth, windowHeight] = useWindowResizeListener({ timeout });
  const [viewportWidth, viewportHeight] = useViewportByRatio({
    minRatio, maxRatio, windowWidth, windowHeight,
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
};

ResponsiveViewport.defaultProps = {
  timeout: 0,
};

export default ResponsiveViewport;
