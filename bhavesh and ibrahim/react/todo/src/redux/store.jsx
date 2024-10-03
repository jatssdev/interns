import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


let store = configureStore({
    reducer: {
        todos: todoSlice
    }
})
export default store