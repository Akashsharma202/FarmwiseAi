// reducers/formDataReducer.js
const initialState = [];

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default formDataReducer;
