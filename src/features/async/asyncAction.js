import {ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START} from "../actionConstants";

export const asyncActionStart = (name) => {
    return{
        type:ASYNC_ACTION_START,
        payload: name
    }
};

export const asyncActionFinish = (name) => {
    return{
        type:ASYNC_ACTION_FINISH,
        payload: name
    }
};

export const asyncActionError = () => {
    return{
        type:ASYNC_ACTION_ERROR
    }
};