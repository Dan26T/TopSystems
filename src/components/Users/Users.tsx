import React from 'react'
import s from './users.module.css';
import {User} from "./User";
import {ToDoType, UsersType} from "../../reduxStore/userReducer";


type PropsType = {
    users: Array<UsersType>
    addNewTodo: (newTodo: ToDoType) => void
    todo: Array<ToDoType>
}

export const Users: React.FC<PropsType> = (props) => {

    return <div className={s.container}>
        <div className="collection-item flow-text">Список пользователей</div>
        {props.users.map(u =>
            <div key={u.id} className={`collection  ${s.users}`}>
            <User id={u.id} name={u.name} addNewTodo={props.addNewTodo} todo={props.todo}/></div>
        )}
    </div>
}