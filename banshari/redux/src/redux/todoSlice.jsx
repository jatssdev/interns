import { createSlice } from "@reduxjs/toolkit"





// let [todos,setTodos] = useState([])
let todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [

        ],
        loading: false,
    },
    reducers: {
        add: (state, action) => {
            let todo = {
                title: action.payload.title,
                date: action.payload.date,
                done: false
            }
            state.todos.push(todo)
            return state
        },
        done: (state, action) => {
            let current = state.todos.find((x, i) => i == action.payload)
            current.done = true
            return state
        }
    }
})

export default todoSlice.reducer


export const { add, done } = todoSlice.actions