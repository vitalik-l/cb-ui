import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RenderInBody from '../RenderInBody';
import classNames from 'classnames';
import getPosition from '../utils/getposition';

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
        renderInBody: PropTypes.bool,
        timeout: PropTypes.number
    };

    static defaultProps = {
        show: false,
        renderInBody: true
    };

    static 	calculatePosition = (element) => {
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

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.show !== nextProps.show;
    // }

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
        const {renderInBody} = this.props;
        const show = this.state.show;
        const style = {
            ...styles,
            left: this.position.left || 0,
            top: this.position.top || 0
        };
        if (show === false) return null;

        const tooltip = (
            <div className={classNames('tooltip', this.props.className)} style={style}>
                {this.props.children}
            </div>
        );

        return renderInBody ? (
            <RenderInBody>
                {tooltip}
            </RenderInBody>
        ) : tooltip;
    }
}

export default Tooltip;