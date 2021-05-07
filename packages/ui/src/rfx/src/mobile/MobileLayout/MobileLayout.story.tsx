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
});

export const Template: Story = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Root>
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
        menu={<MenuTemplate />}
      />
    </Root>
  );
};
Template.storyName = 'MobileLayout';

export default story;
