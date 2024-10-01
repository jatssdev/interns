import { createSlice } from "@reduxjs/toolkit";


let todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
    },
    reducers: {
        add: (state, action) => {
            state.todos.push(action.payload)
        }
    }
})

export default todoSlice.reducer

export const { add } = todoSlice.actions