import React from 'react';

// local files
import { Popper } from '../Popper';
import { ClickAwayListener } from '../ClickAwayListener';
import { useViewport } from '../Viewport';

type Props = React.ComponentProps<typeof Popper>;

export const Options: React.FC<Props> = (props) => {
  const { anchorEl, children, className, onClose, open, ...restProps } = props;
  const { fontSize } = useViewport();

  return (
    <ClickAwayListener onClickAway={open ? onClose : undefined} mouseEvent="onMouseDown">
      <Popper
        anchorEl={anchorEl}
        open={open}
        followWidth
        followFontSize
        {...restProps}
        key={fontSize}
      >
        <div className={className}>{children}</div>
      </Popper>
    </ClickAwayListener>
  );
};
