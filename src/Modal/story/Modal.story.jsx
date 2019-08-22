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