import {useState} from 'react';
import validate from 'bitcoin-address-validation';

function useBitcoinInput() {
	function onChange(e) {
		!validate(address)
	}

	return {

		type: 'text',
		pattern: '^[A-Za-z0-9]{34,44}$',
		onInput: onChange
	}
}

function BitcoinAddressInput() {

	return (
		<fieldset>
			<label className="fieldset__label">Address</label>
			{errors.address ? <span className="cb-Input-error">{errors.address}</span> : null}
			<input
				type="text"
				className="cb-Input fieldset__value"
				required
				placeholder="your BTC address"
				name="address"
				maxLength="100"
				pattern="^[A-Za-z0-9]{34,44}$"
				onInput={onInputChange}
			/>
		</fieldset>
	)
}

export default BitcoinAddressInput;