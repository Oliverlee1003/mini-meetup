import {LOGIN_USER, SIGNED_OUT_USER} from "../actionConstants";


const initiaState = {
    authenticated: false,
    currentUser: null
};

const authReducer = (state=initiaState, action) => {
    switch (action.type){
        case LOGIN_USER:
            return {
                authenticated: true,
                currentUser: action.payload.creds.email
            };
        case SIGNED_OUT_USER:
            return {
                authenticated: false,
                currentUser: null
            };
        default:
            return state;
    }
};

export default authReducer;
