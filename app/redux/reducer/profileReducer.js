import { VisibilityFilters } from '../actions/profileActions.js';
import { userObj, userProvider } from '../../lib/UserProvider.js';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
    first_name: userObj.user_data.first_name,
    last_name: userObj.user_data.last_name,
    email: userObj.user_data.email,
    phone_no: userObj.user_data.phone_no,
    dob: userObj.user_data.dob,
    profile_pic: userObj.user_data.profile_pic,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT":

            return state = {
                ...state,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                phone_no: action.phone_no,
                dob: action.dob,
                profile_Pic: action.profile_Pic
            };
            break;

        default:
            return state;
    }

};

export default profileReducer;