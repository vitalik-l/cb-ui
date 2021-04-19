import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { useWindowResizeListener } from '../hooks/useWindowResizeListener';

type Props = {
  timeout: number;
  children: React.ReactNode;
};

export const WindowResizeListener = ({ timeout, children }: Props) => {
  const windowSize = useWindowResizeListener({ timeout });

  return <Context.Provider value={windowSize}>{children}</Context.Provider>;
};

WindowResizeListener.propTypes = {
  timeout: PropTypes.number,
  children: PropTypes.node,
};

WindowResizeListener.defaultProps = {
  timeout: 0,
  children: undefined,
};
