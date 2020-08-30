import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';

class ContactSupportModal extends Component {
  componentDidMount() {
    if (this.form) this.form.description.focus();
  }

  submitForm = () => {
    if (!this.form.checkValidity() && !this.form.reportValidity()) return;
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(new FormData(this.form));
    }
  };

  render() {
    const { displayForm, onClose } = this.props;

    return (
      <Modal {...this.props} className="cb-ContactSupportModal">
        <ModalHeader>
          Your feedback matters
        </ModalHeader>
        <ModalContent>
          {displayForm ? (
            <form
              className="cb-Form"
              name="feedback"
              ref={(el) => {
                this.form = el;
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <fieldset>
                <label className="fieldset__label">Issue Type</label>
                <select className="cb-Input fieldset__value" required name="issueType">
                  <option value="" disabled selected>Select type</option>
                  {[
                    'Data issue',
                    'Chart is slow',
                    'Drawings issue',
                    'Study/indicator issue',
                    'Trading issue',
                    'Alert issue',
                    'Account deactivation',
                    'Billing',
                    'Other',
                  ].map((v) => <option value={v}>{v}</option>)}
                </select>
              </fieldset>
              <fieldset>
                <label className="fieldset__label">Description</label>
                <textarea className="cb-Input fieldset__value" required name="description" rows={4} tabIndex={0} />
              </fieldset>
            </form>
          ) : (
            <p>
              Contact support at
              {' '}
              <a href="mailto:support@candlebets.com">support@candlebets.com</a>
            </p>
          )}
        </ModalContent>
        <ModalActions>
          <button className="cb-Button" onClick={onClose}>Cancel</button>
          {displayForm ? <button className="cb-Button primary" onClick={this.submitForm}>Send</button> : null}
        </ModalActions>
      </Modal>
    );
  }
}

ContactSupportModal.propTypes = {
  displayForm: PropTypes.bool,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

ContactSupportModal.defaultProps = {
  displayForm: true,
};

export default ContactSupportModal;
