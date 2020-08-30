import React from 'react';
import PropTypes from 'prop-types';
import MenuPanel from './MenuPanel';

function DemoMenu(props) {
  const { games, open, onRequestHide } = props;

  return (
    <MenuPanel open={open} onRequestHide={onRequestHide}>
      <div className="links">
        {games.map((v, i) => (
          /* eslint-disable-next-line react/no-array-index-key */
          <a className={v.game} title={v.game} aria-label={v.game} href={v.url} key={`b${i}`}><span /></a>
        ))}
      </div>
    </MenuPanel>
  );
}

DemoMenu.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({ game: PropTypes.string, url: PropTypes.string }),
  ),
  open: PropTypes.bool,
  onRequestHide: PropTypes.func,
};

DemoMenu.defaultProps = {
  games: [],
};

export default DemoMenu;
