import { createStore } from "redux";
import profileReducer from "./Reducer.js"

const store = createStore(
    profileReducer
);
export default store;