import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

let store = configureStore({
    reducer: {
        todos: todoReducer,

    }
})

export default store