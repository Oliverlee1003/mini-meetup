import {CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, UPDATE_EVENT} from "../actionConstants";

const initialState = [];

// const createEvent = (state, payload) => {
//     return [...state, payload.event]
// };

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return [...state, action.payload.event];

        case UPDATE_EVENT:
            return [
                ...state.filter(event => (
                    event.id !== action.payload.event.id
                )),
                action.payload.event
            ];

        case DELETE_EVENT:
            console.log(state);
            console.log(state.filter(event => event.id !== action.payload.id));

            return [...state.filter(event => event.id !== action.payload.id)];

        case FETCH_EVENT:
            return action.payload.events;

        default:
            return state
    }
};

export default eventReducer;

