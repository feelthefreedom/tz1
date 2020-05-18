import axios from 'axios'
import {
    DOWNLOAD_NEWS_REQUEST,
    DOWNLOAD_NEWS_SUCCESS,
    DOWNLOAD_NEWS_ERROR
} from "./types";
import {googleKey} from "../google_key"


export function getNews() {
    return async function (dispatch) {
        dispatch({ type: DOWNLOAD_NEWS_REQUEST, });
        return axios.get(`http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=`+googleKey)
            .then(response => dispatch({ type: DOWNLOAD_NEWS_SUCCESS, payload: response.data.articles }))
    }
}