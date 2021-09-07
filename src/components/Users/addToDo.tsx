import React, {useState, useEffect, ChangeEvent} from 'react'
import s from './user.module.css';
import {ToDoType} from "../../reduxStore/userReducer";
import {Button, Input} from 'antd';


type PropsType ={
    id: number
    showMode: boolean
    addNewTodo: (newTodo:ToDoType, condition:string) => void
    setNewCondition: (newCondition:string) => void
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
    const clearCondition = () => setTimeout(() => props.setNewCondition(''), 3000)
    const add = (event: any) => {
        if (event.key === 'Enter' && todoText) {
            let newTodo: ToDoType = {
                userId: props.id,
                title: todoText,
                id: 202,
                completed: false
            }
            props.addNewTodo(newTodo, 'success')
            setTodoText('')
            setEdit(false)
            clearCondition()
        }
        if (event.key === 'Enter' && !todoText) {
            props.setNewCondition('warning')
            clearCondition()
        }
    }
    const addCickF = () => {
        if (todoText) {
            let newTodoC: ToDoType = {
                userId: props.id,
                title: todoText,
                id: 202,
                completed: false
            }
            props.addNewTodo(newTodoC, 'success')
            setTodoText('')
            setEdit(false)
            clearCondition()
        } else {
            props.setNewCondition('warning')
            clearCondition()
        }
    }
    const close = () => {
        setEdit(false)
        setTodoText('')
    }
    return <>
        {editMode && props.showMode ? <div style={{display: 'flex'}}><Input placeholder="Введите новое задание" type="text"
                                                     onChange={newTodoText} value={todoText} onKeyPress={add}/>
                    <Button onClick={addCickF}>Добавить</Button>
                <Button onClick={close}>Закрыть</Button>
        </div> :
            <div><Button block onClick={addTodo}>Добавить дело</Button></div>}

    </>
}
