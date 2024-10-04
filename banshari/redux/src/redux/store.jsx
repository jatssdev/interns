import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./todoSlice"


let store = configureStore({
    reducer: {
        users: [],
        posts: [],
        todos: todoSlice
    }
})



export default store