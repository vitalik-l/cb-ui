import React, {
  useState, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';
import InputGroup from '../InputGroup';

const RATE = 0.0005;

function CBCExchangeModal(props) {
  const {
    currencies, balances, onExchange, onClose, ...restProps
  } = props;
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [btcValue, setBTCValue] = useState(0);
  const [cbcValue, setCBCValue] = useState(0);
  const [pauseClick, setPauseClick] = useState(false);
  const [sellHovered, setSellHovered] = useState(false);
  const submitDisabled = !!Object.keys(errors).length || btcValue === 0 || pauseClick;
  const disableSell = !balances.get(currencies.CBC.code);

  function validate() {
    const { amount } = form;
    const errs = {};

    if (+amount.value > 3000000) errs.amount = 'Max amount is 3 000 000';

    setErrors({ errors: errs });
    return !Object.keys(errs).length;
  }

  function submitForm(buy) {
    if ((!form.checkValidity() && !form.reportValidity()) || !validate()) return;
    const { amount } = form;

    if (onExchange) {
      onExchange(buy, +amount.value);
    }
    setPauseClick(true);
  }

  const submitBuy = submitForm.bind(this, true);
  const submitSell = submitForm.bind(this, false);

  useEffect(() => {
    setTimeout(() => {
      setPauseClick(false);
    }, 1000);
  }, [pauseClick]);

  function convertCurrency(value) {
    setBTCValue(+((+value * RATE).toFixed(4)));
  }

  function onAmountChange(e) {
    setCBCValue(e.target.value);
    if (!validate()) return;
    convertCurrency(e.target.value);
  }

  function sellMouseEnter() {
    setSellHovered(true);
  }

  function sellMouseLeave() {
    setSellHovered(false);
  }

  return (
    <Modal className="cb-CBCExchangeModal" {...restProps}>
      <ModalHeader>
        CBC Tokens
      </ModalHeader>
      <ModalContent>
        <form
          autoComplete="off"
          ref={form}
          onSubmit={(e) => e.preventDefault()}
        >
          <InputGroup label="Amount, CBC*">
            <input
              className="cb-Input"
              placeholder="Amount, CBC"
              type="number"
              name="amount"
              min={1}
              max={3000000}
              step="any"
              required
              value={cbcValue}
              onInput={onAmountChange}
              error={errors.amount}
            />
          </InputGroup>
          <div className="exchange-buttons">
            <button className="exchange-button--buy" onClick={submitBuy} disabled={submitDisabled}>
              <div>BUY</div>
              <div>1 CBC = 0.0005 BTC</div>
              <div>Will take:</div>
              <div>
                {btcValue}
                {' '}
                BTC
              </div>
            </button>
            <button className="exchange-button--sell" onClick={submitSell} disabled={submitDisabled || disableSell} onMouseEnter={sellMouseEnter} onMouseLeave={sellMouseLeave}>
              {sellHovered
                ? (
                  <>
                    <div>SELL</div>
                    <div>1 CBC = 0.0005 BTC</div>
                    <div>You get:</div>
                    <div>
                      {btcValue}
                      {' '}
                      BTC
                    </div>
                  </>
                )
                : (
                  <>
                    Sell at the following exchanges
                    <br />
                    after the ICO
                  </>
                )}
            </button>
          </div>
        </form>
      </ModalContent>
      <ModalActions>
        <button className="cb-Button" onClick={onClose}>Cancel</button>
      </ModalActions>
    </Modal>
  );
}

CBCExchangeModal.propTypes = {
  disableSell: PropTypes.bool,
  currencies: PropTypes.shape({
    CBC: PropTypes.shape({ code: PropTypes.string }),
  }),
  balances: PropTypes.instanceOf(Map),
  onExchange: PropTypes.func,
  onClose: PropTypes.func,
};

CBCExchangeModal.defaultProps = {
  currencies: {},
  balances: new Map(),
};

export default CBCExchangeModal;
