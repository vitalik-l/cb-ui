import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tab extends PureComponent {
  render() {
    const { children, value } = this.props;
    return (
      <div id={value} className="tab">
        {children}
      </div>
    );
  }
}

Tab.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
};

export default Tab;
