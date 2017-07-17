import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Tab extends PureComponent {
    static displayName = 'Tab';

    static propTypes = {
        value: PropTypes.string,
        children: PropTypes.any
    };

    render() {
        const {children, value} = this.props;
        return (
            <div id={value} className="tab">
                {children}
            </div>
        );
    }
}

export default Tab;