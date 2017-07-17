import React, {Component} from 'react';
import Tabs, {Tab} from '../';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'first'
        };
        this.testClick = this.onChange.bind(this, 2);
    }
    onChange = value => {
        this.setState({value});
    };

    render() {
        return (
            <Tabs value={this.state.value} onChange={this.onChange}>
                <Tab label="first" value="first">
                    first
                </Tab>
                <Tab label="second" value="second">
                    Second
                </Tab>
            </Tabs>
        )
    }
}