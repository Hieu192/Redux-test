import { Types } from "./types";

const initalState = {
    todos: [],
}


export const todosReducer = (state = initalState, action) => {
    switch (action?.type) {
        case Types.addTodo: 
            return {
                todos: [...state.todos, action.payload]
            }
        case Types.deleteTodo:
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default:
            return state
    }
}