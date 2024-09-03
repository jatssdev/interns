import { createSlice } from "@reduxjs/toolkit";


let productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        getProducts: (state, action) => {
            state = action.payload


            return state
        }

    }
})

export default productSlice.reducer


export const { getProducts } = productSlice.actions