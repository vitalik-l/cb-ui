import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

function Clock({ locale, options, initialTime }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTime(time + 1000);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return <span className="cb-Clock">{time ? new Date(time).toLocaleString(locale, options) : ''}</span>;
}

Clock.propTypes = {
  locale: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.any),
  initialTime: PropTypes.number,
};

Clock.defaultProps = {
  locale: 'en-US',
  initialTime: new Date().getTime(),
};

export default memo(Clock);
