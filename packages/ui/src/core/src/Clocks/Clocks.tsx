import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const LOCAL_TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export const Clocks = (props: Props) => {
  const [time, setTime] = React.useState(new Date().getTime());

  React.useEffect(() => {
    const tID = setTimeout(() => {
      setTime(time + 1000);
    }, 1000);

    return () => clearTimeout(tID);
  }, [time]);

  return <div {...props}>{new Date(time).toLocaleString('en-US', LOCAL_TIME_FORMAT)}</div>;
};
