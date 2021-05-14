import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { MobileLayout } from './index';
import { Root } from '../../../../core/src/Root';
import { MobileGameTableLayoutTemplate } from '../MobileGameTableLayout/MobileGameTableLayout.story';
import { ChartControlsTemplate } from '../ChartControls/ChartControls.story';
import { Header, HeaderItem } from '../../../../weekend/src/Header';
import { UserPanel, UserPanelButton } from '../../../../weekend/src/UserPanel';
import { UserPanelItem } from '../UserPanelItem';
import { MenuButton } from '../../../../weekend/src/MenuButton';
import { MenuTemplate } from '../Menu/Menu.story';
import { TradingControlsLayoutTemplate } from '../TradingControlsLayout/TradingControlsLayout.story';

const story = createStory({
  title: 'mobile/MobileLayout',
  component: MobileLayout,
  style: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MobileApp = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [view, setView] = React.useState();

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MobileLayout
      onCloseMenu={onCloseMenu}
      menuOpen={menuOpen}
      header={
        <Header>
          <HeaderItem>
            <UserPanel>
              <UserPanelItem>Balance</UserPanelItem>
              <UserPanelItem>10$</UserPanelItem>
              <UserPanelButton
                component={MenuButton}
                cropLeft
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </UserPanel>
          </HeaderItem>
        </Header>
      }
      chartControls={<ChartControlsTemplate />}
      gameTable={<MobileGameTableLayoutTemplate />}
      tradingControls={<TradingControlsLayoutTemplate />}
      menu={<MenuTemplate onViewChange={setView} />}
      view={!!view && view !== 'trading' ? <div /> : undefined}
      chart={<div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }} />}
    />
  );
};

export const Template: Story = () => {
  return <Root MobileApp={MobileApp} />;
};
Template.storyName = 'MobileLayout';

export default story;
