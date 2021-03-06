import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./Reducer";

// let middleware = [thunk];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
