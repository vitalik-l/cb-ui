import React from 'react';
import clsx from 'clsx';

/**
 * @ignore - internal component.
 */
export const ValueLabel = (props: any) => {
  const { children, className, open, value, valueLabelDisplay } = props;
  const { current: classes } = React.useRef({
    open: `${className}_open`,
    offset: `${className}-offset`,
    textWrap: `${className}-text-wrap`,
    text: `${className}-text`,
  });

  if (valueLabelDisplay === 'off') {
    return children;
  }

  return React.cloneElement(
    children,
    {
      className: clsx(
        children.props.className,
        {
          [classes.open]: open || valueLabelDisplay === 'on',
        },
        // classes.thumb,
      ),
    },
    <span className={clsx(className, classes.offset)}>
      <span className={classes.textWrap}>
        <span className={classes.text}>{value || 0}</span>
      </span>
    </span>,
  );
};

export default ValueLabel;
