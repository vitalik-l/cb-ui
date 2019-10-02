import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {transitionEndEvent, animationEndEvent} from '../utils/animations';

class Chip extends PureComponent {
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        selected: PropTypes.bool,
        className: PropTypes.string,
        pos: PropTypes.object,
        animate: PropTypes.func,
        onAnimationEnd: PropTypes.func,
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        color: PropTypes.string
    };

    static defaultProps = {
        value: 1,
        selected: false,
        className: '',
        pos: {}
    };

    constructor(props) {
        super(props);
    }

    handleAnimationEnd = (e) => {
        this.props.onAnimationEnd && this.props.onAnimationEnd(e, this);
    };

    componentDidMount() {
        [transitionEndEvent, animationEndEvent].forEach(event => {
            this.chip.addEventListener(event, this.handleAnimationEnd);
        });
        this.props.animate && this.props.animate(this);
    }

    componentWillUnmount() {
        [transitionEndEvent, animationEndEvent].forEach(event => {
            this.chip.removeEventListener(event, this.handleAnimationEnd);
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.animate !== this.props.animate) {
            this.props.animate && this.props.animate(this);
        }
    }

    onClick = e => {
        this.props.onClick && this.props.onClick(e, this.props.value);
    };

    render() {
        if (!this.props.value) return <div />;
        let colorClass = this.props.color ? `chip--${this.props.color}` : null;

        if (this.props.color === 'random') {
            let colors = ['blue', 'red', 'white', 'black', 'green'];
            colorClass = `chip--${colors[Math.floor(Math.random()*colors.length) + 1]}`;
        }

        return (
            <div
                className={classNames(
                    'chip',
                    {
                        selected: this.props.selected,
                        ['chip--large-font']: (this.props.value).toString().length < 4,
                        large: this.props.large,
                        ['v'+this.props.value]: !colorClass
                    },
                    colorClass,
                    this.props.className)}
                style={this.props.pos ? {left:this.props.pos.left, top:this.props.pos.top}:null}
                onClick={this.onClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                ref={node => this.chip = node}
            >
                <span>{this.props.value >= 1000 ? Math.round(this.props.value/1000) + 'K' : this.props.value}</span>
            </div>
        );
    }
}

export default Chip;
