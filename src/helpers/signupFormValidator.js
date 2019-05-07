// eslint-disable-next-line import/no-extraneous-dependencies
import validator from 'validator';

export const checkInputValues = ({
  firstname, lastname, username, password, email
}) => {
  const errorMessages = {};
  if (validator.isEmpty(firstname)) {
    errorMessages.firstnameError = 'Firstname is required';
  }
  if (validator.isEmpty(lastname)) {
    errorMessages.lastnameError = 'Lastname is required';
  }
  if (validator.isEmpty(username)) {
    errorMessages.usernameError = 'Username is required';
  }
  if (validator.isEmpty(email)) {
    errorMessages.emailError = 'Email is required';
  }
  if (validator.isEmpty(password)) {
    errorMessages.passwordError = 'Password is required';
  }
  return errorMessages;
};

export const clearErrorMessages = () => ({
  firstnameError: '',
  lastnameError: '',
  usernameError: '',
  emailError: '',
  passwordError: ''
});
