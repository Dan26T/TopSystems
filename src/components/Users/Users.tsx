import React from 'react'
import s from './users.module.css';
import {User} from "./User";
import {ToDoType, UsersType} from "../../reduxStore/userReducer";
import {Alert} from "antd";


type PropsType = {
    users: Array<UsersType>
    addNewTodo: (newTodo: ToDoType) => void
    todo: Array<ToDoType>
    condition: string | undefined
    setNewCondition: (newCondition: string) => void
}

export const Users: React.FC<PropsType> = (props) => {

    return <div style={{marginTop: 10}}>
        <div className={s.container}>
            <div style={{position: "fixed", top: 80, left: 100, zIndex:25}}>{props.condition && props.condition === "success" ?
                <Alert message="Новое дело добавлено" type="success" showIcon style={{fontSize: 20}}/> : ''}
                {props.condition && props.condition === "info" ?
                    <Alert message="Дело изменено" type="info" showIcon style={{fontSize: 20}}/> : ''}
                {props.condition && props.condition === "warning" ?
                    <Alert message="Вы не вписали дело" type="warning" showIcon style={{fontSize: 20}}/> : ''}
                {props.condition && props.condition === "error" ?
                    <Alert message="Дело удалено" type="error" showIcon style={{fontSize: 20}} /> : ''}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={`collection  ${s.users}`}>
                    <User id={u.id} name={u.name} addNewTodo={props.addNewTodo} todo={props.todo}
                          setNewCondition={props.setNewCondition}/></div>
            )}
        </div>
    </div>

}