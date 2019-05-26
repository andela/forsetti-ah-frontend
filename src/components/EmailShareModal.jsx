import React, { Component, Fragment } from 'react';
import {
  Modal,
  Input,
  Form,
  FormGroup,
  Label,
  FormFeedback,
  Spinner
} from 'reactstrap';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { cancel } from '../assets';
import {
  closeEmailShareModal,
  emailShare,
} from '../actions';
import Button from './common/Button';
import ToastMessage from './common/ToastMessage';

class EmailShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      invalidEmail: false,
      isDisabled: true
    };
  }

  closeModal = () => {
    const { closeModalAction } = this.props;
    closeModalAction();
  };

  handleEmail = (e) => {
    this.isValidEmail(e);
    this.setState({ [e.target.id]: e.target.value });
  };

  isValidEmail = (e) => {
    const validEmailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!validEmailRegx.test(e.target.value)) {
      this.setState({
        invalidEmail: true,
        isDisabled: true
      });
      return;
    }
    this.setState({
      invalidEmail: false,
      isDisabled: false
    });
  };

  reset = (e) => {
    if (e.target.value.length < 1) {
      this.setState({
        invalidEmail: false,
        isDisabled: true
      });
    }
  }

  handleEmailShare = async (e) => {
    e.preventDefault();
    this.setState({
      isDisabled: true
    });
    const { email } = this.state;
    const { emailShareAction, slug, emailShareModal } = this.props;
    await emailShareAction(slug, { email });
    if (emailShareModal) {
      toast(<ToastMessage message={`Article shared successfully shared with ${email}`} />, {
        type: 'success',
        closeButton: false,
        hideProgressBar: true,
        autoClose: 3000,
      });
      this.setState({
        email: '',
        invalidEmail: false,
        isDisabled: true
      });
      this.closeModal();
    }
  }

  render() {
    const { isOpen, emailShareModal } = this.props;
    const { email, invalidEmail, isDisabled } = this.state;
    return (
      <Fragment>
        <Modal
          isOpen={isOpen}
          centered
        >
          <div className='EmailShareModal'>
            <div className='container'>
              <div className='row my-2'>
                <div className='col-md-6'>
                  <h4 className='title'>Share Article</h4>
                </div>
                <div className='col-md-6 text-right'>
                  <span
                    role='button'
                    tabIndex='0'
                    onKeyDown={null}
                    onClick={this.closeModal}
                  >
                    <img
                      src={cancel}
                      alt='cancel'
                    />
                  </span>
                </div>
              </div>
              <div className='row my-2'>
                <div className='col-md-12'>
                  <Form onSubmit={this.handleEmailShare}>
                    <div className='row'>
                      <div className='col-md-12'>
                        <FormGroup>
                          <Label className='label'>Email</Label>
                          <Input
                            type='email'
                            id='email'
                            onChange={this.handleEmail}
                            value={email}
                            invalid={invalidEmail}
                            onKeyUp={this.reset}
                          />
                          { invalidEmail && (
                          <FormFeedback>Email is invalid a simple tweak will make it valid :)</FormFeedback>
                          ) }
                        </FormGroup>
                      </div>
                      <div className='col-md-12 text-center py-3'>
                        <Button
                          type='submit'
                          className='btn submit-btn px-4'
                          disabled={isDisabled}
                        >
                          { emailShareModal.isLoading && (<Spinner size='sm' />) }
                          {' '}
                           SHARE
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  const { emailShareModal } = state;
  return { emailShareModal };
};

export const mapDispatchToProps = dispatch => ({
  closeModalAction: () => {
    dispatch(closeEmailShareModal());
  },
  emailShareAction: (slug, payload) => {
    dispatch(emailShare(slug, payload));
  }
});

const EmailShareModalComponent = connect(mapStateToProps, mapDispatchToProps)(EmailShareModal);

export {
  EmailShareModalComponent,
  EmailShareModal
};
