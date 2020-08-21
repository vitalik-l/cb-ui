import React from 'react';
import PropTypes from 'prop-types';

function ClickAwayListener({ onClickAway, mouseEvent, children }) {
  const childrenRef = React.useRef();
  const eventName = React.useMemo(() => mouseEvent.substring(2).toLowerCase(), [mouseEvent]);

  const childrenPropsHandler = React.useCallback((e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const handler = children.props[mouseEvent];
    if (handler) {
      handler(e);
    }
  }, [children.props, mouseEvent]);

  const childrenProps = {
    ref: childrenRef,
    [mouseEvent]: childrenPropsHandler,
  };

  const clickAwayListener = React.useCallback((e) => {
    onClickAway(e);
  }, [onClickAway]);

  React.useEffect(() => {
    if (eventName) {
      document.addEventListener(eventName, clickAwayListener);

      return () => {
        document.removeEventListener(eventName, clickAwayListener);
      };
    }

    return undefined;
  }, [eventName, clickAwayListener]);

  return <React.Fragment>{React.cloneElement(children, childrenProps)}</React.Fragment>;
}

ClickAwayListener.propTypes = {
  onClickAway: PropTypes.func.isRequired,
  mouseEvent: PropTypes.string,
  children: PropTypes.node,
};

ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseDown',
};

export default ClickAwayListener;
