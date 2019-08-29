import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import InputGroup from '../InputGroup';

const RATE = 0.0005;

class CBCExchangeModal extends Component {
	static propTypes = {
		currencies: PropTypes.object,
        balances: PropTypes.any,
        onExchange: PropTypes.func
	};

	static defaultProps = {
        currencies: {},
        balances: new Map()
	};

	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			btcValue: 0,
			cbcValue: 0
		};
		this.submitBuy = this.submitForm.bind(this, true);
		this.submitSell = this.submitForm.bind(this, false);
	}

	validate = () => {
		const {amount} = this.form;
		let errors = {};

		if (+amount.value > 3000000) errors.amount = 'Max amount is 3 000 000';

		this.setState({errors});
		return !Object.keys(errors).length;
	};

	submitForm(buy) {
		if (!this.form.checkValidity() && !this.form.reportValidity() || !this.validate()) return;
		const {amount} = this.form;

		this.props.onExchange && this.props.onExchange(buy, +amount.value);
	};

	convertCurrency(value) {
		this.setState({
			btcValue: +((+value*RATE).toFixed(4))
		});
	}

	onAmountChange = e => {
		this.setState({
            cbcValue: e.target.value
		});
		if (!this.validate()) return;
		this.convertCurrency(e.target.value);
	};

	render() {
		const {currencies, balances, ...props} = this.props;
		const {errors, btcValue, cbcValue} = this.state;
		let submitDisabled = !!Object.keys(errors).length || btcValue === 0,
			disableSell = !balances.get(currencies.CBC.code);

		return (
			<Modal className="cb-CBCExchangeModal" {...props}>
				<ModalHeader>
					CBC Tokens
				</ModalHeader>
				<ModalContent>
					<form
						autoComplete="off"
						ref={el => this.form = el}
						onSubmit={e => e.preventDefault()}
					>
						<InputGroup label="Amount, CBC*">
							<input
								placeholder="Amount, CBC"
								type="number"
								name="amount"
								min={1}
								max={3000000}
								step="any"
								required
								value={cbcValue}
								onInput={this.onAmountChange}
								error={errors.amount}
							/>
						</InputGroup>
						<div className="exchange-buttons">
							<button className="exchange-button--buy" onClick={this.submitBuy} disabled={submitDisabled}>
								<div>BUY</div>
								<div>1 CBC = 0.0005 BTC</div>
								<div>Will take:</div>
								<div>{btcValue} BTC</div>
							</button>
							<button className="exchange-button--sell" onClick={this.submitSell} disabled={submitDisabled || disableSell}>
								<div>SELL</div>
								<div>1 CBC = 0.0005 BTC</div>
								<div>You get:</div>
								<div>{btcValue} BTC</div>
							</button>
						</div>
					</form>
				</ModalContent>
				<ModalActions>
					<button onClick={props.onClose}>Cancel</button>
				</ModalActions>
			</Modal>
		);
	}
}

export default CBCExchangeModal;
