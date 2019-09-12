import React, {Component} from 'react';
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
			amount: null,
			address: '',
			priority: 'medium',
			errors: {}
		};
	}

	get balance() {
		return this.props.balances.get(this.state.currency.code);
	}

	validate = () => {
		let errors = {};
		if (this.state.amount > this.balance) {
			errors.amount = 'Invalid value';
		}
		if (!this.state.address || (this.state.address && (this.state.address.length < ADDRESS_LENGTH_MIN || this.state.address.length > ADDRESS_LENGTH_MAX))) {
			errors.address = `The address must be from ${ADDRESS_LENGTH_MIN} to ${ADDRESS_LENGTH_MAX} characters`;
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
		if (!this.form.checkValidity() && !this.form.reportValidity() && !this.validate()) return;
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
								placeholder={`min ${currency.minWithdrawalAmount} ${currency.baseTitle}`}
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
									<input type="radio" id="low" name="priority" value="low" checked={priority === 'low'}/>
									<label For="low">Low Priority</label>
								</div>

								<div>
									<input type="radio" id="medium" name="priority" value="medium" checked={priority === 'medium'}/>
									<label For="medium">Medium Priority</label>
								</div>

								<div>
									<input type="radio" id="high" name="priority" value="high" checked={priority === 'high'}/>
									<label For="high">High Priority</label>
								</div>
							</div>
						</fieldset>
						{withdrawFee ? <fieldset><label>Transaction fee of <b>{`${withdrawFee}  ${currency.baseTitle}`}</b> will be applied.</label></fieldset> : null}
						{requestStatus ?
							<fieldset>
								<label>Status: {requestStatus}</label>
							</fieldset>
						: null}
					</form>
				</ModalContent>
				<ModalActions>
					<button className="cb-Button" onClick={this.props.onClose}>{requestStatus ? 'Close' : 'Cancel'}</button>
					{!requestStatus ? <button className="cb-Button primary" onClick={this.submitForm} disabled={!withdrawFee}>Withdraw</button> : null}
				</ModalActions>
			</Modal>
		)
	}
}

export default WithdrawalModal;
