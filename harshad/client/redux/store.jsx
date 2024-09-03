import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'


let store = configureStore({
    reducer: {
        products: productSlice
    }
})


export default store