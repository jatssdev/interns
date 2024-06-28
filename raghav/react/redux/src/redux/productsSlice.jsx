import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Products from "../Products";
import axios from "axios";

export let getProducts = createAsyncThunk('get/products', async () => {
    let response = await axios.get('https://dummyjson.com/products')

    return response.data
})
export let getByCategory = createAsyncThunk('get/products/category', async (thunk) => {
    let response = await axios.get(`https://dummyjson.com/products/category/${thunk}`)

    return response.data
})
let initState = {
    loading: false, products: []
}

let productSlice = createSlice({
    name: "product",
    initialState: initState,

    reducers: {
        filterProducts: (state, action) => {

            if (action.payload === 'all') {
                state = Products
            } else {
                state = Products.filter((product) => product.category === action.payload)
            }
            return state
        }
    }, extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true
            console.log('pending')
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            // state.products = action.payload.products
            console.log(action.payload)

            state.products = action.payload.products
        }).addCase(getProducts.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false

        }).addCase(getByCategory.pending, (state, action) => {
            state.loading = true
            console.log('pending')
        }).addCase(getByCategory.fulfilled, (state, action) => {
            state.loading = false
            // state.products = action.payload.products
            console.log(action.payload)

            state.products = action.payload.products
        }).addCase(getByCategory.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false

        })

    }

})


export default productSlice.reducer
export const { filterProducts } = productSlice.actions