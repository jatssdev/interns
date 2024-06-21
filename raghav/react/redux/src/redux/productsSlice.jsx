import { createSlice } from "@reduxjs/toolkit";
import Products from "../Products";

let productSlice = createSlice({
    name: "product",
    initialState: Products,

    reducers: {
        filterProducts: (state, action) => {
            if (action.payload === 'all') {
                state = Products
            } else {
                state = Products.filter((product) => product.category === action.payload)
            }
            return state
        }
    }

})


export default productSlice.reducer
export const { filterProducts } = productSlice.actions