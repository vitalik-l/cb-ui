import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import {REGEXP} from './constants';
import InputGroup from '../InputGroup';
import classNames from 'classnames';

class RegisterAccountModal extends Component {
    static propTypes = {
        onContactSupport: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            hidePwd: false,
            email: ''
        };
    }

    validate = () => {
        const {password, confirmPassword, username} = this.form;
        let errors = {},
            passwordRegexp = new RegExp(REGEXP.password),
            usernameRegexp = new RegExp(REGEXP.username);

        if (!passwordRegexp.test(password.value)) errors.password = 'The password must be at least 8 characters long and contain at least one upper case letter, lower case letter and one digit';
        if (!usernameRegexp.test(username.value)) errors.username = 'The username may be up to 20 characters long and may contain latin letters, numbers, underscores, dots and dashes';
        if (confirmPassword.value !== password.value) {
            errors.confirmPassword = 'Password doesn\'t match';
        }

        this.setState({errors});
        return !Object.keys(errors).length;
    };

    submitForm = () => {
        if (!this.form.checkValidity() && !this.form.reportValidity() || !this.validate()) return;
        const {username, password, email, subscribe} = this.form;
        this.props.onSubmit && this.props.onSubmit({
            username: username.value,
            password: password.value,
            email: email.value,
            subscribe: subscribe.checked
        });
    };

    onPasswordInput = () => {
        this.setState({hidePwd: true});
        this.validate();
    };

    onInputEmail = e => {
        this.setState({
            email: e.target.value
        })
    };

    render() {
        const {randomUsername, randomPassword, onContactSupport} = this.props;
        const {errors, hidePwd, email} = this.state;
        let submitDisabled = !!Object.keys(errors).length;

        return (
            <Modal {...this.props} className="cb-RegisterAccountModal">
                <ModalHeader>
                    Create Account
                </ModalHeader>
                <ModalContent>
                    <form
                        autoComplete="off"
                        ref={el => this.form = el}
                        onSubmit={e => e.preventDefault()}
                    >
                        <InputGroup label="Choose Username*">
                            <input
                                className="cb-Input"
                                placeholder="Choose Username"
                                type="text"
                                name="username"
                                maxLength="16"
                                pattern={REGEXP.username}
                                required
                                defaultValue={randomUsername}
                                onInput={this.validate}
                                error={errors.username}
                            />
                        </InputGroup>
                        <InputGroup label="Choose Password*">
                            <input
                                className="cb-Input"
                                placeholder="Choose Password"
                                type={hidePwd ? 'password' : 'text'}
                                name="password"
                                maxLength="16"
                                pattern={REGEXP.password}
                                required
                                defaultValue={randomPassword}
                                onInput={this.onPasswordInput}
                                error={errors.password}
                            />
                        </InputGroup>
                        <InputGroup label="Repeat Password*">
                            <input
                                className="cb-Input"
                                placeholder="Repeat Password"
                                type="password"
                                name="confirmPassword"
                                maxLength="16"
                                pattern={REGEXP.password}
                                onInput={this.validate}
                                required
                                error={errors.confirmPassword}
                            />
                        </InputGroup>
                        <InputGroup label="Email (optional)">
                            <input
                                className="cb-Input"
                                placeholder="Email (optional)"
                                onInput={this.onInputEmail}
                                value={email}
                                type="email"
                                name="email"
                                error={errors.email}
                            />
                        </InputGroup>
                        <div className={classNames('cb-InputGroup', {'cb-InputGroup--disabled': !email})}>
                            <input
                                className="cb-Input"
                                id="subscribe"
                                type="checkbox"
                                name="subscribe"
                                disabled={!email}
                            />
                            <label For="subscribe">Subscribe to newsletter</label>
                        </div>
                    </form>
                    <div className="contact-support-link">
                        <span onClick={onContactSupport}>Contact Support</span>
                    </div>
                </ModalContent>
                <ModalActions>
                    <button className="cb-Button" onClick={this.props.onClose}>Cancel</button>
                    <button disabled={submitDisabled} onClick={this.submitForm} className="cb-Button primary">Register</button>
                </ModalActions>
            </Modal>
        );
    }
}

export default RegisterAccountModal;
