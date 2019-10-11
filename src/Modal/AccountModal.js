import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {REGEXP} from './constants';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';
import InputGroup from '../InputGroup';

class AccountModal extends Component {
    static propTypes = {
        onChangePassword: PropTypes.func,
        onChangeEmail: PropTypes.func,
        onLogout: PropTypes.func,
        email: PropTypes.string,
        onContactSupport: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }

    validateChangePasswordForm = () => {
        const {newPassword, confirmPassword} = this.changePasswordForm;
        let errors = {},
            passwordRegexp = new RegExp(REGEXP.password);

        if (!passwordRegexp.test(newPassword.value)) errors.newPassword = 'The password must be at least 8 characters long and contain at least one upper case letter, lower case letter and one digit';
        if (confirmPassword.value !== newPassword.value) {
            errors.confirmPassword = 'Password doesn\'t match';
        }

        this.setState({errors});
        return !Object.keys(errors).length;
    };

    changePassword = () => {
        const form = this.changePasswordForm;
        if (!form.checkValidity() && !form.reportValidity() || !this.validateChangePasswordForm()) return;
        this.props.onChangePassword && this.props.onChangePassword({
            password: form.currentPassword.value,
            newPassword: form.newPassword.value
        });
    };

    changeEmail = () => {
        const form = this.changeEmailForm;
        if (!form.checkValidity() && !form.reportValidity()) return;
        this.props.onChangeEmail && this.props.onChangeEmail({
            password: form.password.value,
            email: form.email.value
        });
    };

    logoutUser = (e) => {
        e.preventDefault();
        this.props.onLogout && this.props.onLogout();
    };

    render() {
        const {email, onContactSupport} = this.props;
        const {errors} = this.state;

        return (
            <Modal {...this.props} className="cb-AccountModal">
				<ModalHeader>
					Account
				</ModalHeader>
				<ModalContent>
					<div className="forms">
						<form name="changePassword" ref={el => this.changePasswordForm = el} onSubmit={e => e.preventDefault()}>
                            <InputGroup label="Change Password">
                                <input
                                    className="cb-Input"
                                    type="password"
                                    name="currentPassword"
                                    required
                                    maxLength="16"
                                    pattern={REGEXP.password}
                                    label="Current Password:"
                                />
                                <input
                                    className="cb-Input"
                                    type="password"
                                    maxLength="16"
                                    name="newPassword"
                                    pattern={REGEXP.password}
                                    required
                                    onInput={this.validateChangePasswordForm}
                                    label="New Password:"
                                    error={errors.newPassword}
                                />
                                <input
                                    className="cb-Input"
                                    type="password"
                                    name="confirmPassword"
                                    error={errors.confirmPassword}
                                    maxLength="16"
                                    pattern={REGEXP.password}
                                    required
                                    label="Confirm New Password:"
                                    onInput={this.validateChangePasswordForm}
                                />
                            </InputGroup>
                            <div className="cb-InputGroup">
                                <button className="cb-Button primary" onClick={this.changePassword}>Save</button>
                            </div>
						</form>
						<form name="changeEmail" ref={el => this.changeEmailForm = el} onSubmit={e => e.preventDefault()}>
                            <InputGroup label="Set Recovery Email">
                                <input
                                    className="cb-Input"
                                    type="password"
                                    name="password"
                                    maxLength="16"
                                    required
                                    pattern={REGEXP.password}
                                    label="Password:"
                                />
                                <input
                                    className="cb-Input"
                                    type="email"
                                    maxLength="256"
                                    autoComplete="on"
                                    name="email"
                                    defaultValue={email}
                                    required
                                    label="Email:"
                                />
                            </InputGroup>
                            <div className="cb-InputGroup">
								<button className="cb-Button primary" onClick={this.changeEmail}>Save</button>
							</div>
						</form>
                        <div className="contact-support-link">
                            <span onClick={onContactSupport}>Contact Support</span>
                        </div>
					</div>
				</ModalContent>
				<ModalActions>
					<button onClick={this.logoutUser} className="cb-Button primary">Logout</button>
					<button className="cb-Button" onClick={this.props.onClose}>Cancel</button>
				</ModalActions>
			</Modal>
        );
    }
}

export default AccountModal;
