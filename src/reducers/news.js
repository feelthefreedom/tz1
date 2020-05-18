import {
    DOWNLOAD_NEWS_REQUEST,
    DOWNLOAD_NEWS_SUCCESS,
    DOWNLOAD_NEWS_ERROR
} from '../actions/types'


const initialState = {
    news: [],
    isLoading: false,
    error: false
};

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case DOWNLOAD_NEWS_REQUEST:
            return { ...state, isLoading: true }
        case DOWNLOAD_NEWS_SUCCESS:
            return { ...state, news: action.payload, isLoading: false }
        case DOWNLOAD_NEWS_ERROR:
            return { ...state, error: action.payload.message, isLoading: false }
        default:
            return state;
    }
}