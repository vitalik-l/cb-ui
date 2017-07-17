import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const LOCALE = 'en-US';

class Clock extends PureComponent {
    static propTypes = {
        autoupdate: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.any,
        localeOptions: PropTypes.object
    };

    static defaultProps = {
        autoupdate: false
    };

    constructor(props) {
        super(props);
        this.state = {
            time: props.time || new Date().getTime()
        };

        this.localeOptions = Object.assign({}, props.localeOptions);
    }

    componentDidMount() {
        if (this.state.time) this.initClocks();
    }

    componentWillUnmount() {
        window.clearInterval(this.int);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.time !== this.props.time) {
            this.setState({time: nextProps.time});
            this.initClocks();
        }
    }

    initClocks() {
        if (!this.props.autoupdate) return;
        this.int = setInterval(()=> {
            this.updateClocks();
        }, 1000);
    }

    updateClocks() {
        this.setState({time: this.state.time + 1000});
    }

    render() {
        return (
            <div className={this.props.className}>
                <time>
                    {this.props.children}
                    <span>{this.state.time ? new Date(this.state.time).toLocaleString(LOCALE, this.localeOptions) : ''}</span>
                </time>
            </div>
        );
    }
}

export default Clock;
