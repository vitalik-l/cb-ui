import React from 'react';

// local files
import { isIOSSafari, resetScrollPosition } from '../utils/browser-utils';
import { useWindowSize } from '../WindowResizeListener';

enum AppMode {
  Desktop = 1,
  Mobile,
}

export type AppResolverProps = {
  DesktopApp?: any;
  MobileApp?: any;
  maxMobileWidth?: number;
  maxMobileHeight?: number;
  children?: any;
};

export const AppResolver = (props: AppResolverProps) => {
  const { DesktopApp, MobileApp, maxMobileWidth = 896, maxMobileHeight = 504, children } = props;
  const [windowWidth, windowHeight] = useWindowSize();
  const [currentMode, setCurrentMode] = React.useState<AppMode>();

  React.useEffect(() => {
    if (windowWidth && windowHeight) {
      if (windowWidth < maxMobileWidth || windowHeight < maxMobileHeight) {
        if (MobileApp) {
          setCurrentMode(AppMode.Mobile);
        }
      } else {
        if (DesktopApp) {
          setCurrentMode(AppMode.Desktop);
        }
      }

      if (isIOSSafari) {
        resetScrollPosition(1);
      }
    }
  }, [windowWidth, windowHeight, DesktopApp, MobileApp, maxMobileHeight, maxMobileWidth]);

  const App = {
    [AppMode.Desktop]: DesktopApp,
    [AppMode.Mobile]:  MobileApp,
  };

  const CurrentApp = currentMode ? App[currentMode] : undefined;

  if (CurrentApp) {
    return <CurrentApp />;
  }

  if (children) {
    return children;
  }

  return null;
}