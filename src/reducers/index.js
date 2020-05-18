import { combineReducers } from "redux";
import { newsReducer } from "./news";
import { tokenReducer } from './token'
import { currentUserReducer } from './currentUser'
import { isCheckingLogPassReducer } from './isCheckingLogPass'

export const rootReducer = combineReducers({
    news: newsReducer,
    token: tokenReducer,
    currentUser: currentUserReducer,
    isCheckingLogPass: isCheckingLogPassReducer
});