const initialState = {
  showModal: false,
  displayModal: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        showModal: false,
      };
    case 'OPEN_SIGNUP_MODAL':
      return {
        displayModal: true
      };
    case 'CLOSE_SIGNUP_MODAL':
      return {
        displayModal: false,
      };
    default:
      return state;
  }
};

export { modalReducer, initialState };
