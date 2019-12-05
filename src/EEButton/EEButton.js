import React, {PureComponent} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CIRCLE_DASH = 439;

export default class EEButton extends PureComponent {
    static propTypes = {
        value: PropTypes.any,
        progress: PropTypes.any,
        percentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hoverText: PropTypes.bool,
        disabled: PropTypes.bool,
        blink: PropTypes.bool,
        animate: PropTypes.bool,
        valueRenderer: PropTypes.any,
        withTie: PropTypes.bool,
        labelTie: PropTypes.any,
        animationClassName: PropTypes.string,
    };

    static defaultProps = {
        animationClassName: 'blink',
        withTie: true,
        hoverText: false,
        labelTie: (
            <span>
                TIE<br/>
                WIN
            </span>
        ),
        labelDefault: 'CASH-OUT METER',
        labelStopLoss: 'stop loss',
        labelTakeProfit: 'take profit',
        labelLossResult: 'TRADE CLOSED',
        labelProfitResult: 'YOU WON',
        labelStopLossHovered: 'stop loss',
        labelTakeProfitHovered: 'take profit',
        imageRedGradient: 'data:image/png;base64,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',
        imageGreenGradient: 'data:image/png;base64,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'
    };

    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        }
    }

    onMouseUp = (e) => {
        if (this.props.progress === 0 || this.props.disabled) return;
        this.props.onClick && this.props.onClick();
    };

    onMouseEnter = e => {
        this.setState({hovered: true});
    };

    onMouseLeave = e => {
        this.setState({hovered: false});
    };

    getInnerContent(key) {
        const {
            value,
            orderIsClosed,
            labelStopLoss,
            labelTakeProfit,
            labelLossResult,
            labelProfitResult,
            percentValue,
            hoverText,
            labelTakeProfitHovered,
            labelStopLossHovered,
            blink,
            valueRenderer,
            withTie,
            labelTie,
            animationClassName,
            animate
        } = this.props;
        let label,
            shouldAnimate = orderIsClosed || key || blink || animate;

        if (withTie && value === 0) {
            return (
                <h6 className="blink">
                    {labelTie}
                </h6>
            )
        }

        if (value > 0) {
            label = !orderIsClosed ? (hoverText && this.state.hovered ? labelTakeProfitHovered : labelTakeProfit) : labelProfitResult;
        } else {
            label = !orderIsClosed ? (hoverText && this.state.hovered ? labelStopLossHovered : labelStopLoss) : labelLossResult
        }

        return (
            <h6 className={classNames('ee-value', {[animationClassName]: shouldAnimate, tradeEnded: orderIsClosed})} key={key}>
                <div className="ee-label-value">{label}</div>
                <div className="ee-value">
                    {valueRenderer ? React.createElement(valueRenderer, {value}) : value}
                </div>
                {percentValue || percentValue === 0 ?
                    <div className="ee-ratio-value">
                        <span>{percentValue}%</span>
                    </div>
                : null}
            </h6>
        )
    }

    renderLabel() {
        const {labelDefault, children, value, animationKey, labelRenderer} = this.props;

        if (children) return children;
        if (labelRenderer) return React.createElement(labelRenderer, this.props);

        let label = <h6>{labelDefault}</h6>;

        if (value || value === 0) {
            label = (
                animationKey ? [animationKey].map(key => this.getInnerContent(key))
                    : this.getInnerContent()
            );
        }

        return label;
    }

    render() {
        let {value, progress, imageGreenGradient, imageRedGradient, disabled, className, withTie} = this.props;
        let	circleSegmentOn = !value && value !== 0 ? CIRCLE_DASH : Math.round(CIRCLE_DASH * (100 - progress)/100),
            circleColor = value < 0 ? 'url(#redGrad)' : 'url(#greenGrad)',
            bigBtnClass = classNames({loss: value < 0, tie: withTie && value === 0, active: !disabled && value && progress > 0});

        return (
            <div className={classNames('cb-ee-button', className)}>
                <svg height="100%" width="100%">
                    <defs>
                        <pattern id="greenGrad" patternUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                            <image x="0" y="0" width="100%" height="100%" href={imageGreenGradient} />
                        </pattern>
                        <pattern id="redGrad" patternUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                            <image x="0" y="0" width="100%" height="100%" href={imageRedGradient} />
                        </pattern>
                    </defs>
                    <circle cx="95" cy="95" r="70" stroke={circleColor} style={{strokeDashoffset: circleSegmentOn}}/>
                </svg>
                <div className={bigBtnClass} onMouseUp={this.onMouseUp} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    {this.renderLabel()}
                </div>
            </div>
        )
    }
}