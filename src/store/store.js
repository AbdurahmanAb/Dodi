import { configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//import {apiSlice} from './apiSlice';




//this is the store
export const store = configureStore({
    reducer:{
        //this is where the api slice gets registered
  //      [apiSlice.reducerPath]: apiSlice.reducer

    },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)