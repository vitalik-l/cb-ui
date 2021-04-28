import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { Tooltip, tooltipStyles } from '@cb-general/core/Tooltip';
import { Popper } from '@cb-general/core/Popper';

// local files
import styles from './Dropzones.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  type?: 'up' | 'down' | 'tie';
  label?: string;
  roi?: string;
  tooltip?: React.ReactNode;
  tooltipOpen?: boolean;
};

export const Dropzone = React.forwardRef((props: Props, ref: any) => {
  const { className, label, roi, type, children, tooltip, tooltipOpen, ...restProps } = props;
  const [innerRef, setInnerRef] = React.useState();
  React.useImperativeHandle(ref, () => innerRef, [innerRef]);

  const setRef = React.useCallback((ref) => {
    setInnerRef(ref);
  }, []);

  return (
    <React.Fragment>
      <Tooltip
        placement="top"
        title={
          !tooltipOpen ? <div className={styles[`tooltip_${type}`]}>{tooltip}</div> : undefined
        }
      >
        <ButtonBase
          className={clsx(styles.dropzone, className, !!type && styles[type])}
          {...restProps}
          ref={setRef}
        >
          {!!label && <div className={styles.label}>{label}</div>}
          {!!roi && <div className={styles.roi}>{roi}</div>}
          <div className={styles.chips}>{children}</div>
        </ButtonBase>
      </Tooltip>
      <Popper
        placement="top"
        anchorEl={innerRef}
        open={tooltipOpen && !!innerRef}
        className={tooltipStyles.popper}
      >
        <div
          className={clsx(
            tooltipStyles.root,
            tooltipStyles.placement_top,
            tooltipStyles.animate,
          )}
        >
          <div className={styles[`tooltip_${type}`]}>
            {tooltip}
          </div>
        </div>
      </Popper>
    </React.Fragment>
  );
});

Dropzone.defaultProps = {
  type: 'down',
};
