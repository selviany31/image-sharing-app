const initalState = {
  imgData: [],
  favImg: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case "GET_IMG":
      return {
        ...state,
        imgData: action.payload,
      };
    case "SET_FAVORITE_IMG":
      return {
        ...state,
        favImg: state.favImg.concat(action.payload),
      };
    case "SET_DELETE_IMG":
      return {
        ...state,
        favImg: state.favImg.pop(action.payload),
      };
    default:
      break;
  }
  return state;
};
