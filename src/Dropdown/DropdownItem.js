import React, { Component } from 'react';
import classNames from 'classnames';

class DropdownItem extends Component {
    onClick = () => {
      this.props.onClick && this.props.onClick(this.props.id);
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

export default DropdownItem;
