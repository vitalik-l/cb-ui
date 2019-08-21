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

