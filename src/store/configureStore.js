import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/index";
import thunk from "redux-thunk";
//import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getNews } from "../actions/NewsActions";


export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

store.dispatch(getNews());