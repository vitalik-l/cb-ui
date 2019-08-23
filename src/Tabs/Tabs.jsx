import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tabs extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onResize: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const activeTabNode = document.querySelector('#' + this.props.value);
        Array.from(document.querySelectorAll('.tab')).forEach(tab => tab.style.display = 'none');
        activeTabNode.style.display = '';
    }

    componentWillUpdate(nextProps) {
        const activeTabNode = document.querySelector('#' + nextProps.value);
        Array.from(document.querySelectorAll('.tab')).forEach(tab => tab.style.display = 'none');
        activeTabNode.style.display = '';
    }

    startDrag = (e) => {
        this.currentPos = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
        if (e.type === 'mousedown') {
            document.addEventListener('mousemove', this.changeTabHeight);
            document.addEventListener('mouseup', this.stopDrag);
        } else if (e.type === 'touchstart') {
            document.addEventListener('touchmove', this.changeTabHeight);
            document.addEventListener('touchend', this.stopDrag);
        }
    };

    changeTabHeight = (e) => {
        let	posY = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY,
            deltaPos = this.currentPos - posY,
            newHeight = this.tabsNode.offsetHeight + deltaPos;
        this.currentPos = posY;
        this.tabsNode.style.height = newHeight + 'px';
        this.props.onResize && this.props.onResize();
    };

    stopDrag = (e) => {
        document.removeEventListener('mousemove', this.changeTabHeight);
        document.removeEventListener('mouseup', this.stopDrag);
        document.removeEventListener('touchmove', this.changeTabHeight);
        document.removeEventListener('touchend', this.stopDrag);
    };

    changeView = (e) => {
        let target = e.target,
            newView = target.dataset.value;
        if (!newView) return;
        this.props.onChange && this.props.onChange(newView);
    };

    render() {
        const {children} = this.props;
        let activeView = this.props.value;
        return (
            <div className="cb-Tabs" ref={node => this.tabsNode = node}>
                <ul className="tab-bar" onClick={this.changeView} onMouseDown={this.startDrag} onDragStart={() => false}>
                    {React.Children.map(children, tab => {
                        if (tab.type.displayName === 'Tab') {
                            return (
                                <li className={classNames({active: tab.props.value === activeView})} data-value={tab.props.value}>{tab.props.label}</li>
                            );
                        }
                    })}
                </ul>
                <div className="tab-content">
                    {children}
                </div>
            </div>
        );
    }
}

export default Tabs;