import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from './MoviesSlice';
import logger from "redux-logger";
import {useMemo} from "react";

let store:any;

export const initStore = () => configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export const initializeStore = (preloadedState:any) => {
    // @ts-ignore
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        // @ts-ignore
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        store = undefined;
    }

    if (typeof window === 'undefined') return _store;

    if (!store) store = _store;

    return _store;
};

export function useStore(initialState:any) {
    return useMemo(() => initializeStore(initialState), [initialState]);
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

