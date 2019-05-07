import { GET_USER_DATA, GET_USER_DATA_FAIL, SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../action-types';

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  userObject: '',
  token: '',
  rememberToken: false,
  redirect: false,
  isloading: false,
  submit: false,
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  username: '',
  errors: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_BEGIN':
      return {
        isLoading: true,
      };
    case 'LOGIN_USER_SUCCESS':
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        userObject: action.payload.data.user,
        token: action.payload.data.token,
        rememberToken: action.rememberLogin
      };
    case 'LOGIN_USER_FAILURE':
      if (action.payload.status === 400) {
        return {
          isLoading: false,
          status: action.payload.status,
          message: action.payload.message,
        };
      } if (action.payload.status >= 500) {
        return {
          isLoading: false,
          status: action.payload.status,
          message: 'Some error occurred. Please try again',
        };
      }
      return {
        isLoading: false,
        status: action.payload.status,
        message: 'Something strange is happening.',
      };

    case GET_USER_DATA:
      return {
        ...state,
        redirect: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case GET_USER_DATA_FAIL:
      return {
        ...state,
        redirect: false,
        error: action.payload.error,
      };
    case SIGNUP_BEGIN:
      return {
        ...state,
        submit: true,
        isloading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        submit: false,
        redirect: true,
        user: action.payload.user,
        isloading: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        submit: false,
        redirect: false,
        errors: action.payload.error,
        isloading: false
      };

    default:
      return {
        ...state,
        isLoading: false
      };
  }
};

export { authReducer, initialState };
