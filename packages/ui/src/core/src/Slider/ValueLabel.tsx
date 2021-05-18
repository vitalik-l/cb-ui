import React from 'react';
import clsx from 'clsx';

/**
 * @ignore - internal component.
 */
export const ValueLabel = (props: any) => {
  const { children, className, open, value, valueLabelDisplay, classes } = props;

  if (valueLabelDisplay === 'off') {
    return children;
  }

  return React.cloneElement(
    children,
    {
      className: clsx(
        children.props.className,
        (open || valueLabelDisplay === 'on') && classes.open,
      ),
    },
    <span className={clsx(className, classes.root, classes.offset)}>
      <span className={classes.textWrap}>
        <span className={classes.text}>{value || 0}</span>
      </span>
    </span>,
  );
};

ValueLabel.defaultProps = {
  classes: {},
};

export default ValueLabel;
