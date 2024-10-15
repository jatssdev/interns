import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./todoSlice"
import productsSlice from "./productsSlice"


let store = configureStore({
    reducer: {
        users: [],
        products: productsSlice,
        todos: todoSlice
    }
})



export default store