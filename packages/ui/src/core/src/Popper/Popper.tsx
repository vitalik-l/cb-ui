import { createPortal } from 'react-dom';
import React from 'react';
import { createPopper, VirtualElement, Options } from '@popperjs/core';

// local files
import { useForkRef } from '../utils/useForkRef';
import { setRef } from '../utils/setRef';
import styles from './CorePopper.module.scss';

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  anchorEl?: null | VirtualElement | (() => VirtualElement) | HTMLElement;
  keepMounted?: boolean;
  open?: boolean;
  transition?: boolean;
  placement?: Options['placement'];
  popperOptions?: any;
  popperRef?: any;
  portalTarget?: any;
  modifiers?: Options['modifiers'];
  direction?: string;
  overlay?: boolean;
  onClose?: (event?: any) => void;
  followWidth?: boolean;
  followFontSize?: boolean;
};

const flipPlacement = (placement: any, direction: any = 'ltr') => {
  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
};

const getAnchorEl = (anchorEl: any) => {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
};

const defaultPopperOptions = {};

export const Popper: React.FC<Props> = React.forwardRef((props, ref: any) => {
  const {
    anchorEl,
    children,
    portalTarget = document.body,
    keepMounted = false,
    modifiers,
    open,
    placement: initialPlacement = 'bottom',
    direction = 'ltr',
    popperOptions = defaultPopperOptions,
    popperRef: popperRefProp,
    style,
    transition = false,
    overlay,
    onClose,
    followWidth,
    followFontSize,
    ...other
  } = props;
  const disablePortal = !portalTarget;
  const tooltipRef: any = React.useRef(null);
  const ownRef = useForkRef(tooltipRef, ref);
  const popperRef: any = React.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef: any = React.useRef(handlePopperRef);
  React.useLayoutEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React.useImperativeHandle(popperRefProp, () => popperRef.current, []);

  const [exited, setExited] = React.useState(true);

  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */
  const [placement, setPlacement] = React.useState(rtlPlacement);

  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });

  React.useEffect(() => {
    if (overlay) {
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }, [open, overlay]);

  const handleOpen = React.useCallback(() => {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    const handlePopperUpdate = (data: any) => {
      setPlacement(data.placement);
    };

    const resolvedAnchorEl = getAnchorEl(anchorEl);

    if (process.env.NODE_ENV !== 'production') {
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();

        if (
          process.env.NODE_ENV !== 'test' &&
          box.top === 0 &&
          box.left === 0 &&
          box.right === 0 &&
          box.bottom === 0
        ) {
          console.warn(
            [
              'The `anchorEl` prop provided to the component is invalid.',
              'The anchor element should be part of the document layout.',
              "Make sure the element is present in the document or that it's not display none.",
            ].join('\n'),
          );
        }
      }
    }

    let popperModifiers: Options['modifiers'] = [
      {
        name: 'preventOverflow',
        options: {
          altBoundary: disablePortal,
        },
      },
      {
        name: 'flip',
        options: {
          altBoundary: disablePortal,
        },
      },
      {
        name: 'onUpdate',
        enabled: true,
        phase: 'afterWrite',
        fn: ({ state }: any) => {
          handlePopperUpdate(state);
        },
      },
    ];

    if (followWidth) {
      popperModifiers.push({
        name: 'followWidth',
        enabled: true,
        fn: ({ state }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        phase: 'beforeWrite',
        requires: ['computeStyles'],
      });
    }

    if (followFontSize) {
      popperModifiers.push({
        name: 'followFontSize',
        enabled: true,
        fn: ({ state }) => {
          state.styles.popper.fontSize = window
            .getComputedStyle(state.elements.reference as Element)
            .getPropertyValue('font-size');
        },
        phase: 'beforeWrite',
        requires: ['computeStyles'],
      });
    }

    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    const popper = createPopper(getAnchorEl(anchorEl), tooltipRef.current, {
      placement: followWidth ? 'bottom-start' : rtlPlacement,
      ...popperOptions,
      modifiers: popperModifiers,
    });

    handlePopperRefRef.current(popper);
  }, [
    anchorEl,
    disablePortal,
    modifiers,
    open,
    rtlPlacement,
    popperOptions,
    followWidth,
    followFontSize,
  ]);

  const handleRef = React.useCallback(
    (node) => {
      setRef(ownRef, node);
      handleOpen();
    },
    [ownRef, handleOpen],
  );

  const handleEnter = () => {
    setExited(false);
  };

  const handleClose = () => {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  const handleExited = () => {
    setExited(true);
    handleClose();
  };

  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, []);

  React.useEffect(() => {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  const childProps: any = { placement };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited,
    };
  }

  let content = (
    <div
      ref={handleRef}
      role="tooltip"
      {...other}
      style={{
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: !open && keepMounted && !transition ? 'none' : undefined,
        ...style,
      }}
    >
      {typeof children === 'function' ? children(childProps) : children}
    </div>
  );

  if (overlay) {
    content = (
      <div className={styles.overlay} role="presentation">
        <div className={styles.clickable} onClick={onClose} aria-hidden="true" />
        {content}
      </div>
    );
  }

  if (portalTarget) {
    return createPortal(content, portalTarget);
  }

  return content;
});
