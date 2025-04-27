// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
// import favSlice from './favSlice'
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//    storage
// };

// const persistedCartReducer = persistReducer(persistConfig, cartSlice);
// const persistedFavReducer = persistReducer(persistConfig, favSlice);

// const store = configureStore({
//   reducer: {
//     addtocart: persistedCartReducer,
//     addtofav: persistedFavReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, 
//     }),
// });

// export const persistor = persistStore(store);
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import favSlice from './favSlice';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// Create a noop storage for SSR
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// Use localStorage in the browser and noopStorage on the server
const storage =
  typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedFavReducer = persistReducer(persistConfig, favSlice);

const store = configureStore({
  reducer: {
    addtocart: persistedCartReducer,
    addtofav: persistedFavReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

export const persistor = persistStore(store);
export default store;
