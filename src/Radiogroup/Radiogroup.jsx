import React, {Component} from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';

class Radiogroup extends Component {
    static propTypes = {
        value: PropTypes.any,
        children: PropTypes.any,
        className: PropTypes.string,
        onChange: PropTypes.func
    };

    onClick = e => {
        const clickedValue = e.currentTarget.getAttribute('data-value');
        if (clickedValue == null) return;
        this.props.onChange && this.props.onChange(clickedValue, e);
    };

    render() {
        const {children, value, className} = this.props;
        const childrenItems = React.Children.map(children, (child) => {
            let childProps = {};
            if (value && !child.props.hasOwnProperty('active')) childProps.active = child.props.value == value;
            if (this.props.onChange && !child.props.onClick) childProps.onClick = this.onClick;
            return React.cloneElement(child, childProps);
        });
        return (
            <ul className={className || 'cb-radiogroup'} {...omit(this.props, ['children', 'value', 'onChange'])}>
                {childrenItems}
            </ul>
        )
    }
}

export default Radiogroup;