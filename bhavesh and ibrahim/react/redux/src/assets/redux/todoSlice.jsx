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
        , remove: (state, action) => {
            state.todos = state.todos.filter((todo, i) => i !== action.payload)

            return state

        }
    }
})

export default todoSlice.reducer

export const { add, remove } = todoSlice.actions