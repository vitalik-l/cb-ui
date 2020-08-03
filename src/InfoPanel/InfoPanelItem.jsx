import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InfoPanelItem extends PureComponent {
  render() {
    const { title, value } = this.props;
    return (
      <div className="info-panel__item">
        <div className="info-panel__item__title">{title}</div>
        <div className="info-panel__item__value">{value}</div>
      </div>
    );
  }
}

InfoPanelItem.propTypes = {
  title: PropTypes.any,
  value: PropTypes.any,
};

export default InfoPanelItem;
