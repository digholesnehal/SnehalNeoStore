import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./reducer/profileReducer";
// import addressReducer from "./reducer/addressReducer";

const store = createStore(
    combineReducers({
        profileReducer,
        // addressReducer
    }),
);

export default store;