import { combineReducers } from "redux";

const initialState = {}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT":
            return { ...state, ...action.state }
            break;

        default:
            return state;
    }
};
export default profileReducer;