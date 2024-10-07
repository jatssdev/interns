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
            state.todos.push({ ...action.payload, status: false })
        },
        remove: (state, action) => {
            let newState = state.todos.filter((x, i) => i != action.payload)
            state.todos = newState
            return state
        },
        status: (state, action) => {
            let t = state.todos.find((x, i) => i == action.payload)
            t.status = !t.status

            return state
        }
    }
})



export default todoSlice.reducer

export const { add, status, remove } = todoSlice.actions