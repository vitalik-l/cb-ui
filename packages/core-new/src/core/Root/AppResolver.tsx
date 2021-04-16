import React from 'react';

// local files
import { isIOSSafari, resetScrollPosition } from '../utils/browser-utils';
import { useWindowSize } from '../WindowResizeListener';
import { AppModeContext } from './AppModeContext';
import { MobileRoot } from '../MobileRoot';

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
  const isMobile = currentMode === AppMode.Mobile;

  React.useEffect(() => {
    if (windowWidth && windowHeight) {
      if (windowWidth < maxMobileWidth || windowHeight < maxMobileHeight) {
        setCurrentMode(AppMode.Mobile);
      } else {
        setCurrentMode(AppMode.Desktop);
      }

      if (isIOSSafari) {
        resetScrollPosition(1);
      }
    }
  }, [windowWidth, windowHeight, DesktopApp, MobileApp, maxMobileHeight, maxMobileWidth]);

  const App = {
    [AppMode.Desktop]: DesktopApp,
    [AppMode.Mobile]: MobileApp,
  };

  if (currentMode) {
    const app = App[currentMode] ? React.createElement(App[currentMode]) : children;

    return (
      <AppModeContext.Provider value={isMobile}>
        {isMobile ? <MobileRoot>{app}</MobileRoot> : app}
      </AppModeContext.Provider>
    );
  }

  return null;
};
