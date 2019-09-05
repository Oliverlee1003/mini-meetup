import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools, devToolsEnhancer} from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

export const configureStore = () => {
    const middlewares = [thunk];
    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer,composedEnhancer);
    return store
};