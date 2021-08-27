import {applyMiddleware, combineReducers, createStore} from 'redux'
import pageReducer from './userReducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    usersPage: pageReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>



let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;