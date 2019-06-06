import React, {Component} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';
import getPosition from '../utils/getposition';

function calculatePosition(element, display) {
    if (!element) return {};
    let elementPosition = getPosition(element);
    // centering
    if (display === 'top') {
        return {
            x: elementPosition.x + element.offsetWidth,
            y: elementPosition.y
        };
    }
    return {
        x: elementPosition.x + element.offsetWidth,
        y: elementPosition.y + element.offsetHeight
    };
}


class Dropdown extends Component {
    static propTypes = {
        element: PropTypes.any,
        show: PropTypes.bool,
        onClose: PropTypes.func,
        value: PropTypes.any,
        options: PropTypes.array,
        className: PropTypes.string
    };

    static defaultProps = {
        display: 'bottom'
    };

    constructor(props) {
        super(props);
        this.position = calculatePosition(props.element, props.display);
        this.state = {
            show: props.show
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.show !== nextProps.show) {
            if (nextProps.show) {
                this.position = calculatePosition(nextProps.element, nextProps.display);
            }
            this.setState({show: nextProps.show}, () => {
                document[nextProps.show ? 'addEventListener' : 'removeEventListener']('click', this.clickEventListener);
            });
        }
    }

    clickEventListener = e => {
        this.props.onClose && this.props.onClose();
    };

    onClick = e => {
        e.stopPropagation();
        e.preventDefault();
    };

    onChange = id => {
        this.props.onChange && this.props.onChange(id);
    };

    render() {
        const {className, options, value, display} = this.props;
        const {show} = this.state;

        if (!show) return null;

        const style = {
            left: this.position.x,
            top: this.position.y,
            transform: display === 'top' ?  'translate(-100%, -100%)' : 'translateX(-100%)'
        };

        return createPortal(
            <div
                className={classNames('cb-dropdown', className)}
                onClick={this.onClick}
                style={style}
            >
                {options.map(({id, label}) => {
                    return (
                        <DropdownItem active={id === value} id={id} onClick={this.onChange} key={id}>
                            {label}
                        </DropdownItem>
                    )
                })}
            </div>,
            document.body
        )
    }
}

export default Dropdown;