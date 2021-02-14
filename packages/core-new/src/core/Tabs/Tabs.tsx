import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '../ButtonBase';
import { animateProperty } from '../utils/animate';
import { debounce } from '../utils/debounce';
import { ScrollLeftIcon } from './ScrollLeftIcon';
import { ScrollRightIcon } from './ScrollRightIcon';
import './Tabs.scss';

export type TabsProps = {
  className?: string;
  children?: React.ReactNode;
  value?: any;
  onChange?: (value: any) => void;
  color?: string;
  variant?: string;
  scrollButtons?: 'on' | 'off';
  scrollLeftIcon?: React.ReactNode;
  scrollRightIcon?: React.ReactNode;
};

export const Tabs = React.forwardRef<any, TabsProps>((props, ref) => {
  const {
    children,
    value,
    className,
    onChange,
    color,
    variant,
    scrollButtons,
    scrollLeftIcon,
    scrollRightIcon,
    ...restProps
  } = props;
  const [displayScroll, setDisplayScroll] = React.useState({
    start: false,
    end: false,
  });
  const tabsRef = React.useRef<any>(null);
  const valueToIndex = new Map();
  const displayScrollButtons = scrollButtons === 'on';

  const updateScrollButtonState = React.useCallback(() => {
    if (!displayScrollButtons) return;
    const tabsNode = tabsRef.current;
    const { scrollWidth, clientWidth, scrollLeft } = tabsNode;
    let showStartScroll;
    let showEndScroll;

    // use 1 for the potential rounding error with browser zooms.
    showStartScroll = scrollLeft > 1;
    showEndScroll = scrollLeft < scrollWidth - clientWidth - 1;

    if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
      setDisplayScroll({ start: showStartScroll, end: showEndScroll });
    }
  }, [displayScrollButtons, displayScroll]);

  const handleTabsScroll = React.useMemo(
    () =>
      debounce(() => {
        updateScrollButtonState();
      }),
    [updateScrollButtonState],
  );

  React.useEffect(() => {
    if (displayScrollButtons) {
      const handleResize = debounce(() => {
        updateScrollButtonState();
      });

      window.addEventListener('resize', handleResize);
      return () => {
        handleResize.clear();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [displayScrollButtons, updateScrollButtonState]);

  React.useEffect(() => {
    updateScrollButtonState();
  }, []); // eslint-disable-line

  React.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);

  React.useEffect(() => {
    const scrollSelectedIntoView = () => {
      const tabsNode = tabsRef.current;
      const rect = tabsNode.getBoundingClientRect();
      const tabsMeta = {
        scrollLeft: tabsNode.scrollLeft,
        left: rect.left,
        right: rect.right,
      };
      let tabMeta;
      if (tabsNode && value !== false) {
        const children = tabsNode.children;

        if (children.length > 0) {
          const tab = children[valueToIndex.get(value)];
          tabMeta = tab ? tab.getBoundingClientRect() : null;
        }
      }
      if (!tabMeta) {
        return;
      }

      if (tabMeta.left < tabsMeta.left) {
        // left side of button is out of view
        const nextScrollStart = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
        scroll(nextScrollStart);
      } else if (tabMeta.right > tabsMeta.right) {
        // right side of button is out of view
        const nextScrollStart = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
        scroll(nextScrollStart);
      }
    };

    scrollSelectedIntoView();
  }, [value]); // eslint-disable-line

  const childrenItems = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const childProps = child.props;
    const childValue = childProps.value === undefined ? childIndex : childProps.value;
    const selected = childValue === value;
    valueToIndex.set(childValue, childIndex);

    return React.cloneElement(child, {
      selected,
      color,
      onChange,
      value: childValue,
      variant,
      ...childProps,
    });
  });

  const scroll = (scrollValue: number) => {
    const tabsNode = tabsRef.current;
    animateProperty('scrollLeft', tabsNode, scrollValue);
  };

  const moveTabsScroll = (delta: number) => {
    const tabsNode = tabsRef.current;
    if (!tabsNode) return;
    let scrollValue = tabsNode.scrollLeft;

    scrollValue += delta;

    scroll(scrollValue);
  };

  const handleStartScrollClick = () => {
    const tabsNode = tabsRef.current;
    moveTabsScroll(-tabsNode.clientWidth);
  };

  const handleEndScrollClick = () => {
    const tabsNode = tabsRef.current;
    moveTabsScroll(tabsNode.clientWidth);
  };

  return (
    <div className={clsx('cb-Tabs', className)} {...restProps} ref={ref}>
      {displayScrollButtons && (
        <ButtonBase
          onClick={handleStartScrollClick}
          className="cb-Tabs-scroll-button"
          style={{ visibility: displayScroll.start ? 'visible' : 'hidden' }}
        >
          {scrollLeftIcon}
        </ButtonBase>
      )}
      <div className="cb-Tabs-scroller" ref={tabsRef} onScroll={handleTabsScroll}>
        {childrenItems}
      </div>
      {displayScrollButtons && (
        <ButtonBase
          onClick={handleEndScrollClick}
          className="cb-Tabs-scroll-button"
          style={{ visibility: displayScroll.end ? 'visible' : 'hidden' }}
        >
          {scrollRightIcon}
        </ButtonBase>
      )}
    </div>
  );
});

Tabs.defaultProps = {
  scrollLeftIcon: <ScrollLeftIcon />,
  scrollRightIcon: <ScrollRightIcon />,
};
