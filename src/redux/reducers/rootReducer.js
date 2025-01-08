import { combineReducers } from "redux";
import userReducer from "./userReducer";

// gộp các reducers để thuận tiện cho store
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
