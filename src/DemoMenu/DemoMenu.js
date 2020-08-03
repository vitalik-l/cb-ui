import React from 'react';
import PropTypes from 'prop-types';
import MenuPanel from './MenuPanel';

function DemoMenu(props) {
  const { games, open, onRequestHide } = props;

  return (
    <MenuPanel open={open} onRequestHide={onRequestHide}>
      <div className="links">
        {games.map((v, i) => (<a className={v.game} href={v.url} key={`b${i}`} />))}
      </div>
    </MenuPanel>
  );
}

DemoMenu.propTypes = {
  games: PropTypes.array,
  open: PropTypes.bool,
  onRequestHide: PropTypes.bool,
};

DemoMenu.defaultProps = {
  games: [],
};

export default DemoMenu;
