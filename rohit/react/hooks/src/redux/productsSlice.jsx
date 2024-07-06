import { createSlice } from "@reduxjs/toolkit";



let productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false, products: []
    },
    reducers: {
        getAllProducts: (state, action) => {

            state.products = action.payload
            return state
        },
        
    }
})

export default productsSlice.reducer

export const { getAllProducts } = productsSlice.actions