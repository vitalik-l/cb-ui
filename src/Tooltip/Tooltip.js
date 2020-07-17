import React, {Component} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getPosition from '../utils/getPosition';

const styles = {
    zIndex: 999,
    position: 'absolute',
    left: 0,
    top: 0,
    pointerEvents: 'none'
};

class Tooltip extends Component {
    static propTypes = {
        show: PropTypes.bool,
        element: PropTypes.any,
        position: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.any,
        timeout: PropTypes.number,
        renderTo: PropTypes.any,
        style: PropTypes.object
    };

    static defaultProps = {
        show: false,
        renderTo: document.body
    };

    static calculatePosition = (element) => {
        if (typeof element === 'string') element = document.getElementById(element);
        if (!element) return {};
        let elementPosition = getPosition(element);
        // centering
        return {
            left: elementPosition.x + element.offsetWidth / 2,
            top: elementPosition.y
        };
    };

    constructor(props) {
        super(props);
        this.getPosition(props);

        this.state = {
            show: props.show
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({show: nextProps.show});
        if (nextProps.timeout) {
            if (nextProps.show) this.timeoutId = setTimeout(() => this.setState({show: false}), nextProps.timeout);
            if (!nextProps.show) clearTimeout(this.timeoutId);
        }
    }

    componentWillUpdate(nextProps) {
        this.getPosition(nextProps);
    }

    getPosition(props) {
        this.position = props.position || Tooltip.calculatePosition(props.element);
    }

    render() {
        const {renderTo, style} = this.props;
        const show = this.state.show;
        const newStyle = {
            ...styles,
            left: this.position.left || 0,
            top: this.position.top || 0,
            ...style
        };
        if (show === false) return null;

        const tooltip = (
            <div className={classNames('cb-Tooltip', this.props.className)} style={newStyle}>
                {this.props.children}
            </div>
        );

        return renderTo ? createPortal(
            <span>
                {tooltip}
            </span>,
            renderTo
        ) : tooltip;
    }
}

export default Tooltip;