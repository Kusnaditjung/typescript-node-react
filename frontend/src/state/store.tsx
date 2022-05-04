import {configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key: "*",
    storage: storage,
}

const pReducer = persistReducer(persistConfig, reducer);

const store = configureStore({ reducer: pReducer});

const persistor = persistStore(store);

export {persistor, store};