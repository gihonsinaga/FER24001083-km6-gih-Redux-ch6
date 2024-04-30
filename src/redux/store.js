import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import figureReducers from "./reducers/figureReducers";
import cardReducers from "./reducers/cardReducers";
import seriesReducers from "./reducers/seriesReducers";
import gamesReducers from "./reducers/gamesReducers";

const rootReducers = combineReducers({
  figures: figureReducers,
  cards: cardReducers,
  series: seriesReducers,
  games: gamesReducers,
});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["todo"],
  // blacklist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export const persistor = persistStore(store);
