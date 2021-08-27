import {userApi} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";


const SET_USERS = 'SET_USERS'
const SET_TODOS = 'SET_TODOS'
const UPDATE_TODO = 'UPDATE_TODO'
const SET_NEW_TODO = 'SET_NEW_TODO'
const DELETE_TODO = 'DELETE_TODO'

export type UsersType = {
    id: number
    name: string
    username?: string
    email?: string
    address?: AddressType
    phone?: string
    website?: string
    company?: CompanyType
}

type AddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}
type GeoType = {
    lat: string
    lng: string
}
type CompanyType = {
    name: string
    catchPhrase:string
    bs: string
}

export type ToDoType = {
    userId: number
    id: number
    title: string
    completed: boolean
}
export type InitialStateType = {
    users: Array<UsersType>
    todo: Array<ToDoType>
    newToDo: string
}

let initialState: InitialStateType = {
    users: [],
    todo: [],
    newToDo: ""
};

type ActionsType = SetUsersACType | SetToDosACType | UpdateToDosACType | SetNewTodoACType | deleteToDoACType

const PageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TODOS:
            return {
                ...state,
                todo: [...action.todo]
            }
        case UPDATE_TODO:
            debugger
            return {
                ...state,
                todo: [...state.todo.map(t => {
                    if (t.id === action.id && t.userId === action.userId) {
                        t.title = action.todoText
                        console.log(t)
                        return t
                    } else {
                        return t
                    }
                })]
            }
        case SET_NEW_TODO:
            return {
                ...state,
                todo: [...state.todo, action.newTodo]
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: [...state.todo.filter(t => t.id !== action.id)]
            }
        default:
            return state;
    }
}

type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
const setUsersAC = (users: Array<UsersType>): SetUsersACType => ({type: SET_USERS, users})

type SetToDosACType = {
    type: typeof SET_TODOS
    todo: Array<ToDoType>
}
const setToDosAC = (todo: Array<ToDoType>): SetToDosACType => ({type: SET_TODOS, todo})

type UpdateToDosACType = {
    type: typeof UPDATE_TODO
    todoText: string
    id: number
    userId: number
}
const updateToDosAC = (todoText: string, id: number, userId: number): UpdateToDosACType => ({type: UPDATE_TODO, todoText, id, userId})

type SetNewTodoACType = {
    type: typeof SET_NEW_TODO
    newTodo: ToDoType
}
const setNewTodo = (newTodo: ToDoType): SetNewTodoACType => ({type: SET_NEW_TODO, newTodo})

type deleteToDoACType = {
    type: typeof DELETE_TODO
    id: number
}
const deleteToDo = (id: number, userId: number): deleteToDoACType => ({type: DELETE_TODO, id})


export const getUsers = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        userApi.getUsers().then(response => {
            dispatch(setUsersAC(response))
        })
    }
}
export const getTodo = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        userApi.getToDos().then(response => {
            dispatch(setToDosAC(response))
        })
    }
}
export const updateTodo = (todoText: string, id: number, userId: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        userApi.updateToDo(todoText, id, userId).then(response => {
            dispatch(updateToDosAC(response.title, response.id, response.userId))
        })
    }
}
export const addNewTodo = (newTodo:ToDoType) => {
    return (dispatch: Dispatch<ActionsType>) => {
        // @ts-ignore
        userApi.setNewToDo(newTodo.title, newTodo.userId).then(response => {
            let todo = {...response}
            dispatch(setNewTodo(todo))
        })
    }
}
export const deleteTodo = (id:number, userId: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        userApi.deleteToDo(id).then(response => {
            dispatch(deleteToDo(id, userId))
        })
    }
}


export default PageReducer;