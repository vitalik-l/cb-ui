import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InfoPanel extends PureComponent {
    static propTypes = {
      display: PropTypes.oneOf(['under', 'above']),
      className: PropTypes.string,
    };

    static defaultProps = {
      display: 'above',
    };

    render() {
      const { display, className } = this.props;
      return (
        <div className={classNames('info-panel-wrapper', { 'info-panel-wrapper--under': display === 'under' }, className)}>
          <div className="info-panel">
            <span>
              {this.props.children}
            </span>
          </div>
        </div>
      );
    }
}

export default InfoPanel;
