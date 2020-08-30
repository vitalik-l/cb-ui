import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class DropdownItem extends Component {
    onClick = () => {
      const { onClick, id } = this.props;
      if (onClick) {
        onClick(id);
      }
    };

    render() {
      const { active, children } = this.props;

      return (
        <div className={classNames('cb-dropdown__item', { active })} onClick={active ? null : this.onClick}>
          {children}
        </div>
      );
    }
}

DropdownItem.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  active: PropTypes.bool,
  children: PropTypes.element,
};

export default DropdownItem;
