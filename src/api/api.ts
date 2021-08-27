import axios from "axios";
import {ToDoType, UsersType} from "../reduxStore/userReducer";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {'Content-type': 'application/json; charset=UTF-8',}
})

type GetUsersType= Array<UsersType>
type GetToDosType= Array<ToDoType>
type ToDosMType= ToDoType

export const userApi = {
    getUsers (){
        return instance.get<GetUsersType>(`users`)
            .then(res => res.data)
    },
    getToDos (){
        return instance.get<GetToDosType>(`todos`)
            .then(res => res.data)
    },
    updateToDo (todoText: string, id:number, userId:number){
        return instance.put<ToDosMType>(`todos/${id}`, { userId: userId, id:id , title: todoText, completed: false})
            .then(res => res.data)
    },
    setNewToDo (title:string, userId:number, id:number){
        return instance.post<ToDosMType>(`todos`, { userId: userId, id:id, title: title, completed: false})
            .then(res => res.data)
    },
    deleteToDo (id:number){
        return instance.delete(`todos/${id}`)
            .then((res) => res.data)
    }
}

