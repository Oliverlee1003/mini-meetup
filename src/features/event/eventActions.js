import {CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, UPDATE_EVENT} from "../actionConstants";
import {asyncActionError, asyncActionFinish, asyncActionStart} from "../async/asyncAction";
import {fetchSampleData} from "../../app/data/mockApi";

export const createEvent = (event) => {
    return{
        type: CREATE_EVENT,
        payload: {
            event: event  //payload.event
        }
    }
};

export const updateEvent = (event) => {
    return{
        type: UPDATE_EVENT,
        payload: {
            event: event  //payload.event
        }
    }
};

export const deleteEvent = (eventId) => {
    return{
        type: DELETE_EVENT,
        payload: {
            id: eventId  //payload.event
        }
    }
};

export const loadEvents = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart());
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENT, payload: {events}});
            dispatch(asyncActionFinish())
        } catch (error){
            console.log(error);
            dispatch(asyncActionError())
        }
    }
};