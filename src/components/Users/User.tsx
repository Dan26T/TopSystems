import React, {useState} from 'react'
import s from './user.module.css';
import {AddToDo} from "./addToDo";
import TodoContainer from "./ToDoList/TodoContainer";
import {ToDoType} from "../../reduxStore/userReducer";
import { Collapse } from 'antd';

type PropsType ={
    id: number
    name: string
    todo: Array<ToDoType>
    addNewTodo: (newTodo: ToDoType) => void
    setNewCondition: (newCondition: string) => void
}
const { Panel } = Collapse;

export const User: React.FC<PropsType> = (props:PropsType) => {
    let [showMode, setMode] = useState(false)
    const showTodos = (): void => {
        setMode(!showMode)
    }

    return <Collapse  onChange={showTodos}>
        <Panel header={<span><span style={{margin: 10}} className={s.userId}>{props.id}</span><span>{props.name}</span></span>} key={props.id}>
    <div className={!showMode ? s.add : ''}>
        <div style={{textAlign: "center"}}><AddToDo setNewCondition={props.setNewCondition}
                                                    showMode={showMode} id={props.id} addNewTodo={props.addNewTodo}
        /></div>
            <ul style={{width: '100%'}}>{props.todo.filter(e => e.userId === props.id)
            .map(e =>
                <TodoContainer title={e.title} id={e.id} userId={e.userId}/>
            )}</ul>

        </div>
        </Panel>
    </Collapse>
        }



