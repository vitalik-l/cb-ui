import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useWindowResizeListener from '../hooks/useWindowResizeListener';

function WindowResizeListener({ timeout, children }) {
  const windowSize = useWindowResizeListener({ timeout });

  return <Context.Provider value={windowSize}>{children}</Context.Provider>;
}

WindowResizeListener.defaultProps = {
  timeout: 0,
  children: undefined,
};

WindowResizeListener.propTypes = {
  timeout: PropTypes.number,
  children: PropTypes.node,
};

export default WindowResizeListener;
