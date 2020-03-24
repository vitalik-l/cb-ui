import React, {Component} from 'react';
import validate from 'bitcoin-address-validation';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';

const ADDRESS_LENGTH_MIN = 34;
const ADDRESS_LENGTH_MAX = 44;

class WithdrawalModal extends Component {
	static propTypes = {
		balances: PropTypes.any,
        onWithdraw: PropTypes.func,
		currencies: PropTypes.object,
        getWithdrawalFee: PropTypes.func,
		onClose: PropTypes.func,
		fmtMoney: PropTypes.func
	};

	static defaultProps = {
		balances: new Map(),
        currencies: {}
	};

	constructor(props) {
		super(props);
		this.state = {
			currency: props.currency,
			amount: '',
			address: '',
			priority: 'medium',
			errors: {}
		};
	}

	get balance() {
		return this.props.balances.get(this.state.currency.code);
	}

	validate = () => {
		const {amount, address} = this.state;
		let errors = {};
		if (amount && (amount > this.balance || isNaN(amount) || amount <= 0)) {
			errors.amount = 'Invalid value';
		}
		if (!address || (address && (address.length < ADDRESS_LENGTH_MIN || address.length > ADDRESS_LENGTH_MAX))) {
			errors.address = `The address must be from ${ADDRESS_LENGTH_MIN} to ${ADDRESS_LENGTH_MAX} characters`;
		} else if (!validate(address)) {
			errors.address = 'Address seems incorrect';
		}
		this.setState({errors});
		return !Object.keys(errors).length;
	};

	onCurrencyChange = ({target}) => {
		this.setState({currency: this.props.currencies[target.value]});
	};

	onPriorityChange = e => {
		this.setState({priority: e.target.value});
	};

	submitForm = () => {
		if (!this.form.checkValidity() && !this.form.reportValidity() || !this.validate()) return;
		// do submit
		this.props.onWithdraw && this.props.onWithdraw({
			amount: this.state.amount,
			currency: this.state.currency.code,
			address: this.state.address,
			priority: this.state.priority
		});
	};

	onInputChange = ({target}) => {
		this.setState({[target.name]: target.value}, () => {
			if (!this.validate()) return;
            this.props.getWithdrawalFee && this.props.getWithdrawalFee({
				amount: this.state.amount,
				currency: this.state.currency.code,
				address: this.state.address,
				priority: this.state.priority.toUpperCase()
			});
		});
	};

	fillAmount = () => {
		this.setState({amount: +this.balance});
	};

	render() {
		const {currency, amount, errors, priority} = this.state;
		const {withdrawFee, requestStatus, currencies, fmtMoney, ...props} = this.props;
		const disableWithdraw = Boolean(!withdrawFee || !!Object.keys(errors).length);
		let balance = this.balance || 0;

		return (
			<Modal className="cb-WithdrawalModal" {...props}>
				<ModalHeader>
					Withdraw
				</ModalHeader>
				<ModalContent>
					<form name="withdraw" ref={el => this.form = el} onSubmit={e => e.preventDefault()}>
						<table className="property-inputs">
							<tbody>
								<tr>
									<td><label>Currency:</label></td>
									<td>
										<select className="cb-Input" name="currency" onChange={this.onCurrencyChange} value={currency.code}>
											<option value="" disabled>Select currency</option>
                                            {Object.keys(currencies).map(cur => <option value={currencies[cur].code} key={currencies[cur].code}>{currencies[cur].title}</option>)}
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<fieldset>
							<label>You current balance is: <span className="current-balance" onClick={this.fillAmount}>{fmtMoney(balance, currency.code)}</span></label>
						</fieldset>
						<fieldset>
							<label className="fieldset__label">Amount</label>
							{errors.amount ? <span className="cb-Input-error">{errors.amount}</span> : null}
							<input
								type="number"
								className="cb-Input fieldset__value"
								required
								min="0"
								step="any"
								pattern="[0-9]+([,\.][0-9]+)?"
								placeholder={`min ${currency.minWithdrawalAmount} ${currency.sign}`}
								value={amount}
								name="amount"
								onInput={this.onInputChange}
							/>
						</fieldset>
						<fieldset>
							<label className="fieldset__label">Address</label>
                            {errors.address ? <span className="cb-Input-error">{errors.address}</span> : null}
							<input
								type="text"
								className="cb-Input fieldset__value"
								required
								placeholder={`your ${currency.title.toLowerCase()} address`}
								name="address"
								maxLength="100"
								pattern="^[A-Za-z0-9]{34,44}$"
								onInput={this.onInputChange}
							/>
						</fieldset>
						<fieldset><label>Requires Fee selection</label></fieldset>
						<fieldset>
							<label className="fieldset__label">
								<b>Priority</b><br/>
								<small>*Higher priority means faster confirmation during high network load</small>
							</label>
							<div className="fieldset__value fieldset__value--group" onChange={this.onInputChange}>
								<div>
									<input type="radio" id="low" name="priority" value="low" defaultChecked={priority === 'low'}/>
									<label htmlFor="low">Low Priority</label>
								</div>

								<div>
									<input type="radio" id="medium" name="priority" value="medium" defaultChecked={priority === 'medium'}/>
									<label htmlFor="medium">Medium Priority</label>
								</div>

								<div>
									<input type="radio" id="high" name="priority" value="high" defaultChecked={priority === 'high'}/>
									<label htmlFor="high">High Priority</label>
								</div>
							</div>
						</fieldset>
						{withdrawFee ? <fieldset><label>Transaction fee of <b>{`${withdrawFee}  ${currency.sign}`}</b> will be applied.</label></fieldset> : null}
						{requestStatus ?
							<fieldset>
								<label>Status: {requestStatus}</label>
							</fieldset>
						: null}
					</form>
				</ModalContent>
				<ModalActions>
					<button className="cb-Button" onClick={this.props.onClose}>{requestStatus ? 'Close' : 'Cancel'}</button>
					{!requestStatus ? <button className="cb-Button primary" onClick={this.submitForm} disabled={disableWithdraw}>Withdraw</button> : null}
				</ModalActions>
			</Modal>
		)
	}
}

export default WithdrawalModal;
