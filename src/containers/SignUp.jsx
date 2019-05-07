import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader, InputGroupAddon, InputGroup, Input, InputGroupText } from 'reactstrap';
import signup from '../assets/images/signup.svg';
import ButtonComponent from '../components/common/Button';
import { signUpUser } from '../actions';
import FormErrorText from '../components/common/FormErrorText';
import { checkInputValues, clearErrorMessages } from '../helpers/signupFormValidator';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      firstname: '',
      firstnameError: '',
      lastname: '',
      lastnameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      username: '',
      usernameError: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname, lastname, email, password, username
    } = this.state;
    const data = {
      firstname,
      lastname,
      email,
      password,
      username
    };
    const errorMessages = checkInputValues(data);
    const errorFields = Object.keys(errorMessages);
    this.setState(clearErrorMessages());

    if (errorFields.length > 0) {
      this.setState(errorMessages);
    } else {
      const emptyErrorMessages = clearErrorMessages();
      this.setState(emptyErrorMessages);

      const { dispatch } = this.props;
      dispatch(signUpUser(data));
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const {
      modal,
      firstname,
      lastname,
      email,
      password,
      username,
      firstnameError,
      lastnameError,
      emailError,
      passwordError,
      usernameError
    } = this.state;

    const { redirect } = this.props;
    if (redirect) return <Redirect to='/' />;

    return (
      <div id='signup'>
        <Modal isOpen={modal} toggle={this.toggle} className='modal-dialog'>
          <ModalHeader
            toggle={this.toggle}
            style={{
              borderBottom: 0,
            }}
          />
          <ModalBody className='modal-body'>
            <div className='d-block d-md-flex d-lg-flex'>
              <form className='w-100' onSubmit={this.handleSubmit}>

                <InputGroup className='signup-form-group'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText
                      className='signup-form-label'
                    >
                      FIRSTNAME
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='firstname'
                    type='text'
                    className='signup-form-input'
                    onChange={this.handleChange}
                    name='firstname'
                    value={firstname}
                  />
                </InputGroup>
                <FormErrorText message={firstnameError} className='form-error-text' />

                <InputGroup className='signup-form-group'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText
                      className='signup-form-label'
                    >
                      LASTNAME
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='lastname'
                    type='text'
                    className='signup-form-input'
                    onChange={this.handleChange}
                    name='lastname'
                    value={lastname}
                  />
                </InputGroup>
                <FormErrorText message={lastnameError} className='form-error-text' />

                <InputGroup className='signup-form-group'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText
                      className='signup-form-label'
                    >
                      EMAIL
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='email'
                    type='email'
                    className='signup-form-input'
                    onChange={this.handleChange}
                    name='email'
                    value={email}
                  />
                </InputGroup>
                <FormErrorText message={emailError} className='form-error-text' />

                <InputGroup className='signup-form-group'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText
                      className='signup-form-label'
                    >
                      PASSWORD
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='password'
                    type='password'
                    className='signup-form-input'
                    onChange={this.handleChange}
                    name='password'
                    value={password}
                  />
                </InputGroup>
                <FormErrorText message={passwordError} className='form-error-text' />

                <InputGroup className='signup-form-group'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText
                      className='signup-form-label'
                    >
                      USERNAME
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='username'
                    type='text'
                    className='signup-form-input'
                    onChange={this.handleChange}
                    name='username'
                    value={username}
                  />
                </InputGroup>
                <FormErrorText message={usernameError} className='form-error-text' />

                <div>
                  <ButtonComponent
                    className='signup-form-button'
                  >
                    JOIN NOW
                  </ButtonComponent>
                </div>
              </form>
              <div className='w-50 d-none d-md-block'>
                <img src={signup} alt='signup-icon' />
              </div>
            </div>

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.auth.redirect,
  isloading: state.auth.isloading,
  submit: state.auth.submit,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  password: state.auth.password,
  email: state.auth.email,
  username: state.auth.username,
  errors: state.auth.errors
});

export default connect(mapStateToProps)(SignUp);
