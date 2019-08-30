import {LOGIN_USER, SIGNED_OUT_USER} from "../actionConstants";

export const login = (creds) => {
    return {
        type: LOGIN_USER,
        payload:{
            creds
        }
    }
};

export const logout = () => {
    return {
        type: SIGNED_OUT_USER
    }
};