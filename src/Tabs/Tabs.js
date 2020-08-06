import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tabs extends PureComponent {
  componentDidMount() {
    const { value } = this.props;
    const activeTabNode = document.querySelector(`#${value}`);
    Array.from(document.querySelectorAll('.tab')).forEach((tab) => { tab.style.display = 'none'; });
    activeTabNode.style.display = '';
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate(nextProps) {
    const activeTabNode = document.querySelector(`#${nextProps.value}`);
    Array.from(document.querySelectorAll('.tab')).forEach((tab) => { tab.style.display = 'none'; });
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
    const posY = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    const deltaPos = this.currentPos - posY;
    const { onChangeTabHeight, onResize, transformNode: transformNodeFromProps } = this.props;
    const transformNode = transformNodeFromProps === 'content' ? this.tabsContentNode : this.tabsNode;
    if (onChangeTabHeight) {
      onChangeTabHeight(posY, deltaPos, transformNode);
      return;
    }
    this.currentPos = posY;
    transformNode.style.height = `${transformNode.offsetHeight + deltaPos}px`;
    onResize && onResize();
  };

  stopDrag = () => {
    document.removeEventListener('mousemove', this.changeTabHeight);
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchmove', this.changeTabHeight);
    document.removeEventListener('touchend', this.stopDrag);
  };

  changeView = (e) => {
    const { target } = e;
    const { value, onChange } = this.props;
    const newView = target.dataset.value;
    if (!newView || newView === value) return;
    onChange && onChange(newView);
  };

  render() {
    const { children, value } = this.props;

    return (
      <div className="cb-Tabs" ref={(node) => this.tabsNode = node}>
        <ul className="tab-bar" onClick={this.changeView} onMouseDown={this.startDrag} onDragStart={() => false}>
          {React.Children.map(children, (tab) => (
              <li className={classNames({ active: tab.props.value === value })} data-value={tab.props.value}>{tab.props.label}</li>
          ))}
        </ul>
        <div className="tab-content" ref={(node) => this.tabsContentNode = node}>
          {children}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onResize: PropTypes.func,
  onChangeTabHeight: PropTypes.func,
  transformNode: PropTypes.string,
  children: PropTypes.node,
};

export default Tabs;
