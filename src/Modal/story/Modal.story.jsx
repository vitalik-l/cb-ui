import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import themeSelect from '../../utils/themeSelect.js';
import classNames from 'classnames';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import Modal from '../';
import ModalHeader from '../ModalHeader';
import ModalContent from '../ModalContent';
import ModalActions from '../ModalActions';
import TestModal from './TestModal';
import RegisterAccountModal from '../RegisterAccountModal';
import AccountModal from '../AccountModal';
import DepositModal from '../DepositModal';
import WithdrawalModal from '../WithdrawalModal';
import CBCExchangeModal from '../CBCExchangeModal';
import AfterRegisterModal from '../AfterRegisterModal';
import Tooltip from '../../Tooltip';
import ExchangeModal from '../ExchangeModal';
import ContactSupportModal from '../ContactSupportModal';

stories.add('default', () => (
    <div className={classNames('modal-story', themeSelect())}>
        <TestModal/>
    </div>
));

stories.add('galileo', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <Modal open={boolean('open', false)} displayCloseButton>
            <ModalHeader>
                Header
            </ModalHeader>
            <ModalContent>
                Content
            </ModalContent>
            <ModalActions>
                <button>Action</button>
            </ModalActions>
        </Modal>
    </div>
));

stories.add('RegisterAccountModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <RegisterAccountModal
            open={boolean('open', false)}
            displayCloseButton
            onSubmit={action('onSubmit')}
        />
    </div>
));

stories.add('AccountModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <AccountModal
            open={boolean('open', false)}
            displayCloseButton
        />
    </div>
));

stories.add('DepositModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <DepositModal
            open={boolean('open', false)}
            displayCloseButton
            depositAddress={text('Deposit address', '')}
            currencies={[
                {
                    code: 'BTC',
                    //sign: 'b',
                    sign: 'BTC',
                    //base: 100,
                    base: 100000000,
                    title: 'Bitcoin',
                    minWithdrawalAmount: 0.00010000,
                    minimumFractionDigits: 8
                },
                {
                    code: 'FGLT',
                    sign: 'FGLT',
                    base: 10000,
                    title: 'FunGelt',
                    minimumFractionDigits: 4
                }
            ]}
            funCurrencyCode='FGLT'
        />
        <Tooltip />
    </div>
));

stories.add('WithdrawalModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <WithdrawalModal
            open={boolean('open', false)}
            displayCloseButton
            currency={{code: 'BTC', title: 'Bitcoin', baseTitle: 'BTC', minWithdrawalAmount: 0.001000}}
            currencies={{
                BTC: {code: 'BTC', title: 'Bitcoin', baseTitle: 'BTC', minWithdrawalAmount: 0.001000}
            }}
            fmtMoney={(balance) => balance}
            withdrawFee={number('Withdraw fee', 0)}
            requestStatus={text('requestStatus')}
            onWithdraw={action('onWithdraw')}
        />
    </div>
));

stories.add('CBCExchangeModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <CBCExchangeModal
            open={boolean('open', false)}
            displayCloseButton
            currencies={{
                CBC: {code: 'CBC', title: 'CBC', baseTitle: 'CBC'},
                BTC: {code: 'BTC'}
            }}
        />
    </div>
));

stories.add('ExchangeModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <ExchangeModal
            open={boolean('open', false)}
            displayCloseButton
            currencies={{
                BTC: {code: 'BTC', minimumFractionDigits: 8},
                GLT: {code: 'GLT', title: 'GLT', baseTitle: 'GLT', minimumFractionDigits: 4},
            }}
            exchangeSuccess={boolean('exchangeSuccess', false)}
        />
    </div>
));

stories.add('AfterRegisterModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <AfterRegisterModal
            open={boolean('open', false)}
            displayCloseButton
        />
    </div>
));

stories.add('ContactSupportModal', () => (
    <div className={classNames('modal-story', 'galileo')}>
        <ContactSupportModal
            open={boolean('open', false)}
            displayCloseButton
            displayForm={boolean('displayForm', true)}
        />
    </div>
));