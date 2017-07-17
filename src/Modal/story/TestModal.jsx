import React, {Component} from 'react';
import Modal from '../';

class TestModal extends Component {
    state = {
        openModal: false
    };

    onClick = () => {
        this.setState({openModal: !this.state.openModal});
    };

    render() {
        return (
            <span>
                <button onClick={this.onClick} style={{zIndex: 9999, position: 'absolute'}}>Toggle modal</button>
                <Modal open={this.state.openModal}>
                    Test Modal
                </Modal>
            </span>
        )
    }
}

export default TestModal;