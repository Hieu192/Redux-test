import {applyMiddleware, combineReducers, createStore} from 'redux';
import { counterReducer } from './countReducer';
import { todosReducer } from './todosReducer';
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    count: counterReducer,
    todos: todosReducer
})


// const middleware = (store) => (next) => (action) => {
//     console.log('middleware', {store, action, next})
//     next(action)
// }

// const middleware1 = (store) => (next) => (action) => {
//     console.log('middleware1', {store, action, next})
//     if (action.payload?.name?.includes('hhh')) {
//         next({
//             type: action.type,
//             payload: {
//                 ...action.payload,
//                 name: '***'
//             }
//         })
//     } else {
//         next(action)
//     }
// }
export const store = createStore(rootReducer, applyMiddleware(thunk));