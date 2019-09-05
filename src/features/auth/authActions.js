import {LOGIN_USER, SIGNED_OUT_USER} from "../actionConstants";
import {closeModal} from "../modals/modalActions";

export const login = (creds) => {
    return dispatch =>{
        dispatch({
            type: LOGIN_USER,
            payload:{
                creds
            }
        });
        dispatch(closeModal())
    }};

export const logout = () => {
    return {
        type: SIGNED_OUT_USER
    }
};