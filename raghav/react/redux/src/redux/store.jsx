import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

let store = configureStore({
    reducer: {
        products: productsSlice
    }
})

export default store