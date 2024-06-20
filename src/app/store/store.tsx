import {combineReducers, configureStore} from "@reduxjs/toolkit";
import baseApi from "../../shared/api/base";

const rootRecucer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer
})

export const store = configureStore({
    reducer: rootRecucer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(baseApi.middleware)
})
