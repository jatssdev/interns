import { createSlice } from "@reduxjs/toolkit";



let todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [

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
        },
        editTodoHandler: (state, action) => {
            state.todos.splice(action.payload.index, 1, action.payload)
            return state
        }
    }
})



export default todoSlice.reducer

export const { add, status, editTodoHandler, remove } = todoSlice.actions