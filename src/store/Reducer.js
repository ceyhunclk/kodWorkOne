const initialState = {
  submit: [],
  fav: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_SUBMIT':
      return {...state, submit: [...state.submit, action.payload]};
      break;
    case 'SAVE_FAV':
      return {...state, fav: [...state.fav, action.payload]};
      break;
    case 'REMOVE_FAV':
      return {...state, fav: action.payload};
      break;
    case 'REMOVE_SUB':
      return {...state, submit: action.payload};
      break;
    default:
      return state;
      break;
  }
};
export default Reducer;
