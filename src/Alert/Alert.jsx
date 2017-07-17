import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Alert extends PureComponent {
    static propTypes = {
        type: PropTypes.string,
        content: PropTypes.any
    };

    render() {
        const {type, content} = this.props;
        return (
            <div className={classNames('alert', type, {active: !!content})}>
                {content}
            </div>
        );
    }
}

export default Alert;