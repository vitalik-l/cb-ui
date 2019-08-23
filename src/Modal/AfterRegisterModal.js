import React, {Component} from 'react';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from "./ModalActions";

class AfterRegisterModal extends Component {
	render() {
		return (
			<Modal {...this.props}>
				<ModalHeader>
					Register
				</ModalHeader>
				<ModalContent>
					Your account has been created. Login, please.
				</ModalContent>
				<ModalActions>
					<button onClick={this.props.onClose}>Cancel</button>
					<button className="primary" onClick={this.props.onLogin}>Login</button>
				</ModalActions>
			</Modal>
		);
	}
}

export default AfterRegisterModal;