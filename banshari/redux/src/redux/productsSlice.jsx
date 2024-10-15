import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// let [todos,setTodos] = useState([])
export let getAllProducts = createAsyncThunk('products/get', async () => {
    let response = await axios.get('https://dummyjson.com/products')
    console.log(response.data)
    return response.data.products
})
let productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [

        ],

        loading: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {

            state.loading = false
        })
    }

})

export default productsSlice.reducer




