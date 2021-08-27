import React, {useState, useEffect, ChangeEvent} from 'react'
import s from './user.module.css';
import {ToDoType} from "../../reduxStore/userReducer";


type PropsType ={
    id: number
    showMode: boolean
    addNewTodo: (newTodo:ToDoType) => void
}

export const AddToDo: React.FC<PropsType> = (props) => {
    let [editMode, setEdit] = useState(false)
    let [todoText, setTodoText] = useState('')
    useEffect( () => {
        setEdit(!props.showMode)
    }, [props.showMode])
    const addTodo = () => {
        setEdit(true)
    }
    const newTodoText = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.currentTarget.value)
    }
    const add = (event: any) => {
        if (event.key === 'Enter') {
            let newTodo: ToDoType = {
                userId: props.id,
                title: todoText,
                id: 202,
                completed: false
            }
            props.addNewTodo(newTodo)
            setTodoText('')
            setEdit(false)
        }
    }
    const close = () => {
        setEdit(false)
        setTodoText('')
    }
    return <a className={`collection-item flow-text ${s.addM}`}>
        {editMode && props.showMode ? <div className={s.inputS}><input className={s.inputS} type="text"
                                                     onChange={newTodoText} onBlur={close} value={todoText} onKeyPress={add}/></div> :
            <div className={s.buttonAdd}><button className='waves-effect cyan lighten-5 btn-small black-text'
                          onClick={addTodo}>Добавить дело
                <i className="material-icons blue-text">add_circle</i></button></div>}

    </a>
}
