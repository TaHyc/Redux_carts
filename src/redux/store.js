import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favorites/favoritesSlice";
import userSlice from "./user/userSlice";

import { api } from "./API/api";

const redusers = combineReducers({
  favorites: favoritesSlice,
  user: userSlice,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: redusers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
