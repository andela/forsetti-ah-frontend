const initialState = {
  showModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        showModal: false,
      };
    default:
      return state;
  }
};

export { modalReducer, initialState };
