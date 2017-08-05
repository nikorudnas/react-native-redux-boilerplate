import {
    combineReducers
} from "redux";
import testReducer from "./testReducer";
import NavReducer from './navReducer.js'

export default function getRootReducer() {
    return combineReducers({
        nav: NavReducer,
        testReducer: testReducer
    });
}