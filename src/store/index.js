import { configureStore } from "@reduxjs/toolkit";
import holidaysReducer from "./holidaysSlice";


export const store = configureStore({
    reducer: {
        holidays: holidaysReducer,
    }
})