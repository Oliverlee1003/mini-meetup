import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {configureStore} from "./app/store/configStore";
import ScrollToTop from './app/common/util/ScrollToTop'
import {loadEvents} from "./features/event/eventActions";

const rootEl = document.getElementById('root');
const store = configureStore();
store.dispatch(loadEvents());

let render = () => {
    ReactDOM.render(
        <Provider store = {store}>
            <BrowserRouter>
                <ScrollToTop>
                    <App/>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
        , rootEl)
};

// hot module replacement, so that changes in code will
// reflect on browser without refresh
// When bugs, refresh the page to make sure it's a bug
if (module.hot){
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    })
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
