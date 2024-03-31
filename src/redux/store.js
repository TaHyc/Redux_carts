import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import favoritesSlice from "./favorites/favoritesSlice";
import userSlice from "./user/userSlice";
import { createLogger } from "redux-logger";
import { api } from "./API/api";

const logger = createLogger({
  collapset: true,
});

const redusers = combineReducers({
  counter: counterReducer,
  favorites: favoritesSlice,
  user: userSlice,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: redusers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});
