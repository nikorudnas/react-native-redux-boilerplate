import {
    createStore,
    applyMiddleware
} from "redux";

import getRootReducer from "./reducers";
import logger from 'redux-logger';
import thunk from "redux-thunk";

export default function getStore() {
    const store = createStore(
        getRootReducer(),
        applyMiddleware(thunk),
        applyMiddleware(logger)
    );

    return store;
}