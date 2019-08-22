import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import Tooltip from '../Tooltip';
import qr from 'qr-encode';
import classNames from 'classnames';

function generateQRCode(address) {
    return qr(address, {type: 6, size: 4, level: 'Q'});
}

class DepositModal extends Component {
    static propTypes = {
        getDepositAddress: PropTypes.func,
        currencies: PropTypes.array
    };

    static defaultProps = {
        currencies: [{
            code: 'BTC',
            title: 'Bitcoin'
        }, {
            code: 'ETH',
            title: 'Ethereum'
        }]
    };

    constructor(props) {
        super(props);
        this.state = {
            currency: 'BTC',
            copied: false
        };
    }

    componentDidMount() {
        if (this.state.currency) this.props.getDepositAddress && this.props.getDepositAddress(this.state.currency);
    }

    onCurrencyChange = ({target}) => {
        this.setState({currency: target.value}, () => this.props.getDepositAddress && this.props.getDepositAddress(target.value));
    };

    copyTarget = ({target}) => {
        let inp = this.paymentAddress;
        if (inp && inp.select) {
            inp.select();
            try {
                document.execCommand('copy');
                inp.blur();
                // target.classList.add('copied');
                Tooltip.show(this.copyButton);
            } catch (err) {
                alert('please press Ctrl/Cmd+C to copy');
            }
        }
    };

    render() {
        const {currency} = this.state;
        const {depositAddress, currencies, ...props} = this.props;
        const QRCode = generateQRCode(depositAddress);

        return (
            <Modal className="cb-DepositModal" {...props}>
				<ModalHeader>
					Deposit
				</ModalHeader>
				<ModalContent>
					<table className="property-inputs">
						<tr>
							<td>Currency:</td>
							<td>
                                <select name="currency" onChange={this.onCurrencyChange} value={currency}>
                                    <option value="" disabled selected>Select currency</option>
                                    {currencies.map(cur => <option value={cur.code} key={cur.code}>{cur.title}</option>)}
                                </select>
                            </td>
						</tr>
					</table>
					<fieldset>
						<label className="fieldset__label">This code contains your personal payment address.</label>
						<div className="payment-address-field">
							<input type="text" required name="paymentAddress" value={depositAddress} readOnly ref={el => this.paymentAddress = el}/>
							<button onClick={this.copyTarget} data-tooltip="Copied" data-tooltip-timeout="0" ref={el => this.copyButton = el}>Copy</button>
						</div>
					</fieldset>
					<fieldset>
						<div className="qr-code"><img className={classNames({invisible: !depositAddress})} src={QRCode}/></div>
						<p className="note">
							Please note: You may receive your funds in parts over 3 confirmations.<br />
							Recommendation: when selecting a transfer fee, a higher fee guarantees confirmation within 10 minutes. A lower fee may take an hour or more to confirm.
						</p>
					</fieldset>
				</ModalContent>
			</Modal>
        );
    }
}

export default DepositModal;
