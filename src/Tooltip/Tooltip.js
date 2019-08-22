import React, {Component} from 'react';
import {createPortal} from 'react-dom';
import getPosition from '../utils/getposition';
import classNames from 'classnames';

document.addEventListener('mousemove', (e) => {
    const {pageX, pageY} = e;
    Tooltip.mouseX = pageX;
    Tooltip.mouseY = pageY;
});

class Tooltip extends Component {
    hideTimeoutId = null;
    state = {
        visible: false,
        content: 'Tooltip',
        target: null,
        x: 0,
        y: 0
    };

    static show(eventOrTarget) {
        if (!Tooltip.ref) return;
        let target = eventOrTarget.target || eventOrTarget,
            {
                tooltipTimeout = 500,
                tooltipAlign = 'center',
                tooltipPosition = 'top'
            } = target.dataset;

        clearTimeout(Tooltip.showTimeoutId);
        Tooltip.showTimeoutId = setTimeout(() => {
            Tooltip.ref.show(target, {
                position: tooltipPosition,
                align: tooltipAlign
            });
        }, tooltipTimeout);
    }

    static hide() {
        if (!Tooltip.ref) return;
        clearTimeout(Tooltip.showTimeoutId);
        Tooltip.ref.hide();
    }

    componentDidMount() {
        Tooltip.ref = this;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.init && !prevState.init || this.state.x !== prevState.x || this.state.y !== prevState.y) {
            this.setState({
                visible: true
            });
        }
    }

    show = (target, {position, align}) => {
        let targetPosition = getPosition(target),
            coordinates = {};

        switch (position) {
            case 'top':
                coordinates.x = align === 'center' ?
                    targetPosition.x + target.offsetWidth / 2 :
                    Tooltip.mouseX;
                coordinates.y = targetPosition.y;
                break;
            case 'left':
                coordinates.x = targetPosition.x;
                coordinates.y = align === 'center' ?
                    targetPosition.y + target.offsetHeight / 2 :
                    Tooltip.mouseY;
                break;
        }

        clearTimeout(this.hideTimeoutId);
        this.setState({
            init: true,
            visible: false,
            content: target.dataset.tooltip,
            x: coordinates.x,
            y: coordinates.y,
            position,
            align
        }, () => {
            this.hideTimeoutId = setTimeout(() => {
                this.hide();
            }, 2000);
        });
    };

    hide = () => {
        this.setState({
            init: false,
            visible: false
        });
    };

    render() {
        const {className} = this.props;
        const {visible, content, x, y, init, position} = this.state;
        let coordinates = {};

        if (visible) {
            switch (position) {
                case 'top':
                    coordinates = {
                        left: (x - this.tooltipNode.offsetWidth / 2) + 'px',
                        top: (y - this.tooltipNode.offsetHeight) + 'px'
                    };
                    break;
                case 'left':
                    coordinates = {
                        left: x - this.tooltipNode.offsetWidth + 'px',
                        top: (y - this.tooltipNode.offsetHeight/2) + 'px'
                    };
                    break;
            }
        }

        return createPortal(
            <div
                className={classNames('cb-Tooltip', {'cb-Tooltip--init': init, 'cb-Tooltip--visible': visible, [`cb-Tooltip--${position}`]: position}, className)}
                onClick={this.onClick}
                style={coordinates}
                ref={el => this.tooltipNode = el}
            >
                <div className="cb-Tooltip__content">
                    {content}
                </div>
            </div>,
            document.body
        );
    }
}

export default Tooltip;