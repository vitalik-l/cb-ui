import React from 'react';
import clsx from 'clsx';
import { Root } from '@cb-general/core/Root';
import { Viewport } from '@cb-general/core/Viewport';
import { Ticker } from '@cb-general/weekend/Ticker';
import { ButtonGroup } from '@cb-general/weekend/ButtonGroup';
import { Button } from '@cb-general/weekend/Button';
import {
  CrosshairIcon,
  IndicatorIcon,
  MAIcon,
  PointerIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from '@cb-general/weekend/icons';
import { Tabs, Tab } from '@cb-general/weekend/Tabs';
import { Panel } from '@cb-general/weekend/Panel';

// local files
import { HeaderTemplate } from '../Header/Header.story';
import appStyles from './App.module.scss';
import { TradingControlsTemplate } from '../TradingControls/TradingControls.story';
import classes from '../styles/classes.module.scss';
import './App.scss';

export const App = () => {
  return (
    <Root>
      <Viewport baseHeight={1080} baseWidth={1920} maxRatio={21 / 9} minRatio={4 / 3}>
        <div className={classes.App}>
          <HeaderTemplate />
          <div className="d-flex flex-fill">
            <div title="chart-and-tables-area" className="flex-fill d-flex column">
              <div title="chart-and-ticker-area" className="flex-fill d-flex">
                <Ticker className={appStyles.Ticker} />
                <div title="chart-area" className="flex-fill d-flex column">
                  <div title="chart-controls" className={appStyles.ChartControls}>
                    <ButtonGroup>
                      <Button>TICK</Button>
                      <Button>M1</Button>
                    </ButtonGroup>
                    <div className={appStyles.ChartControlsSeparator} />
                    <ButtonGroup>
                      <Button>
                        <PointerIcon />
                      </Button>
                      <Button>
                        <CrosshairIcon />
                      </Button>
                    </ButtonGroup>
                    <div className={appStyles.ChartControlsSeparator} />
                    <ButtonGroup>
                      <Button>
                        <ZoomInIcon />
                      </Button>
                      <Button>
                        <ZoomOutIcon />
                      </Button>
                    </ButtonGroup>
                    <div className={appStyles.ChartControlsSeparator} />
                    <ButtonGroup>
                      <Button>
                        <IndicatorIcon />
                      </Button>
                      <Button>
                        <MAIcon />
                      </Button>
                    </ButtonGroup>
                  </div>
                  <div title="chart" />
                </div>
              </div>
              <Panel title="tables-area" className={appStyles.TabsContainer}>
                <Tabs value={0} className={appStyles.Tabs}>
                  <Tab label="Open Orders" />
                  <Tab label="Closed Orders" />
                  <Tab label="Settings" />
                </Tabs>
              </Panel>
            </div>
            <TradingControlsTemplate
              title="trading-controls-area"
              className={clsx(appStyles.TradingControls)}
            />
          </div>
        </div>
      </Viewport>
    </Root>
  );
};
