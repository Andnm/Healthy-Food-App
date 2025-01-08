import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

// khai báo store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
