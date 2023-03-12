import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";
import {getWindowTop} from "@/utils/methods";


type Movies = {
    IsLoading: any,
    movies: any,
    totalResults: any,
    IsError: any,
    searchString: any,
    activePage: any,
}


const initialState: Movies = {
    IsLoading: false,
    movies: [],
    totalResults: null,
    IsError: null,
    searchString: '',
    activePage: 1,
}


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        FETCH_MOVIES(state) {
            state.IsLoading = true;
        },
        SUCCESS_FETCH_MOVIES(state, action: PayloadAction<any>) {
            state.IsLoading = false;
            state.movies = action.payload;
            state.totalResults = action.payload.totalResults || null;
            state.searchString = action.payload.searchString;
            state.activePage = action.payload.activePage;
            state.IsError = null;
        },
        FAILED_FETCH_MOVIES(state, action: PayloadAction<any>) {
            state.IsLoading = false;
            state.IsError = action.payload.error;
            state.movies = [];
            state.searchString = action.payload.searchString;
            state.activePage = 1;
            state.totalResults = 0;
        }
    }
})

export const onChangeSearch = (params:any, page:any) => (dispatch:any) => {
    dispatch({ type: FETCH_MOVIES });
    let req1;
    let req2;
    if (page) {
        req1 = axios.get(BASE_URL, { params: { s: params, page: ((page * 2) - 1) } });
        req2 = axios.get(BASE_URL, { params: { s: params, page: (page * 2) } });
    } else {
        req1 = axios.get(BASE_URL, { params: { s: params, page: 1 } });
        req2 = axios.get(BASE_URL, { params: { s: params, page: 2 } });
        page = 1;
    }

    Promise.all([req1, req2]).then((responses) => {
        let movies = [];
        if (responses[0]?.data?.Response === 'False') {
            dispatch({
                type: FAILED_FETCH_MOVIES,
                payload: [],
                totalResults: 0,
                searchString: params,
                error: responses[0]?.data?.Error,
                activePage: page,
            });
        } else {
            if (responses[0]?.data.Search) {
                movies = responses[0]?.data?.Search;
            }
            if (responses[1]?.data.Search) {
                movies = [...movies, ...responses[1]?.data?.Search];
            }
            dispatch({
                type: SUCCESS_FETCH_MOVIES,
                payload: movies,
                searchString: params,
                totalResults: responses[0]?.data?.totalResults ?? null,
                error: null,
                activePage: page,
            });
            getWindowTop();
        }
    }).catch((err) => {
        dispatch({
            type: FAILED_FETCH_MOVIES,
            error: err.toLocaleString(),
        });
    });
};



export const {FETCH_MOVIES, SUCCESS_FETCH_MOVIES, FAILED_FETCH_MOVIES} = moviesSlice.actions;
export default moviesSlice.reducer;
