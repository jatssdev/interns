import { createSlice } from "@reduxjs/toolkit";


let todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                status: true,
                title: 'buy new iphone'
            },
            {
                status: true,
                title: 'buy new iphone'
            },
            {
                status: false,
                title: 'buy new iphone'
            },
            {
                status: true,
                title: 'buy new iphone'
            },
        ],
        loading: false,
    },
    reducers: {
        add: (state, action) => {

        }
    }
})



export default todoSlice.reducer

export const { add } = todoSlice.actions