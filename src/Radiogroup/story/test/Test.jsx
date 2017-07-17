import React, {Component} from 'react';
import Radiogroup, {RadiogroupButton} from '../../';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
        this.testClick = this.onChange.bind(this, 3);
    }
    onChange = value => {
        this.setState({value});
    };

    render() {
        return (
            <Radiogroup value={this.state.value} onChange={this.onChange}>
                <RadiogroupButton value={1}>1</RadiogroupButton>
                <RadiogroupButton value={2}>2</RadiogroupButton>
                <RadiogroupButton value={3} onClick={this.testClick}>3</RadiogroupButton>
            </Radiogroup>
        )
    }
}