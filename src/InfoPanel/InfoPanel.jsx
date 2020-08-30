import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InfoPanel extends PureComponent {
  render() {
    const { display, className, children } = this.props;
    return (
      <div className={classNames('info-panel-wrapper', { 'info-panel-wrapper--under': display === 'under' }, className)}>
        <div className="info-panel">
          <span>
            {children}
          </span>
        </div>
      </div>
    );
  }
}

InfoPanel.propTypes = {
  display: PropTypes.oneOf(['under', 'above']),
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

InfoPanel.defaultProps = {
  display: 'above',
};

export default InfoPanel;
