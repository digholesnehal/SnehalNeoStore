import { VisibilityFilters } from '../actions/addressActions.js';

const initialState = {
    // visibilityFilter: VisibilityFilters.SHOW_ALL,
    // todos: []

}

const addressReducer = (state = initialState, action) => {

    switch (action.type) {
        case "EDITADDRESS":
            return state = {
                ...state,
                address: action.address,
                landmark: action.landmark,
                city: action.city,
                state: action.state,
                zip: action.zip,
                country: action.country,
                UserAdd: action.UserAdd,
            };
            break;
        default:
            return state;
    }
};

export default addressReducer;