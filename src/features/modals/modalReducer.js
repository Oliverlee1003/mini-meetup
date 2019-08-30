import {MODAL_CLOSE, MODAL_OPEN} from "../actionConstants";

const initialState = null;

// const openModal = (state,payload) => {
//     const {modalType, modalProps} = payload;
//     return{ modalType, modalProps}
// };
//
// const closeModal= () => {
//     return null;
// };

const modalReducer = (state=initialState, action) =>{
    switch (action.type) {
        case MODAL_OPEN: {
            const {modalType, modalProps} = action.payload;
            return{ modalType, modalProps}
        }

        case MODAL_CLOSE:
            return null;

        default:
            return state;
    }
};

export default modalReducer