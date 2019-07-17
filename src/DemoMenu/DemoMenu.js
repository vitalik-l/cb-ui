import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuPanel from './MenuPanel';

class DemoMenu extends Component {
    static propTypes = {
        games: PropTypes.array,
        open: PropTypes.bool,
        onRequestHide: PropTypes.bool
    };

    static defaultProps = {
      games: []
    };

    render() {
        const {games, open, onRequestHide} = this.props;

        return (
            <MenuPanel open={open} onRequestHide={onRequestHide}>
                <div className="links">
                    {games.map((v, i) => {
                        return (<a className={v.game} href={v.url} key={'b' + i} />);
                    })}
                </div>
            </MenuPanel>
        )
    }
}

export default DemoMenu;