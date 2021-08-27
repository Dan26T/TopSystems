import React, {useState} from 'react'
import s from './user.module.css';
import {AddToDo} from "./addToDo";
import TodoContainer from "./ToDoList/TodoContainer";
import {ToDoType} from "../../reduxStore/userReducer";

type PropsType ={
    id: number
    name: string
    todo: Array<ToDoType>
    addNewTodo: (newTodo: ToDoType) => void
}

export const User: React.FC<PropsType> = (props:PropsType) => {
    let [showMode, setMode] = useState(false)
    const showTodos = (): void => {
        setMode(!showMode)
    }

    return <div className={s.user}><a  className="collection-item flow-text" onClick={showTodos}>
        <span><span className={s.userId}>{props.id}</span><span>{props.name}</span></span>
        </a>
    <div className={!showMode ? s.add : ''}>
        <div className={`${s.addTodo} collection`}><AddToDo showMode={showMode} id={props.id} addNewTodo={props.addNewTodo}/></div>
        <ul style={{width: '100%'}} className='collection'>{props.todo.filter(e => e.userId === props.id)
            .map(e => <div className='collection-item coll' key={e.id+e.userId}>
                <TodoContainer title={e.title} id={e.id} userId={e.userId}/></div>)}</ul></div>
</div>
        }

