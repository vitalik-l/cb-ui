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
                CBC: {code: 'CBC', title: 'Bitcoin', baseTitle: 'CBC'}
            }}
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