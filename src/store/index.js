import { configureStore } from "@reduxjs/toolkit";
import holidaysReducer from "./holidaysSlice";
import textReducer from './textSlice'
import imageReducer from './imageSlice'

export const store = configureStore({
    reducer: {
        holidays: holidaysReducer,
        text: textReducer,
        image: imageReducer,
    }
})