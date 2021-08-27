import React, {useState, useEffect, ChangeEvent} from 'react'
import s from './todo.module.css';

type PropsType = {
    title: string
    id: number
    userId: number
    deleteTodo: (id:number, userId:number) => void
    updateToDo: (todoText: string, id:number, userId:number) => void
}

export const TodoList: React.FC<PropsType> = (props) => {
    let [editMode, setEdit] = useState(false)
    let [todoText, setTodoText] = useState('')
    useEffect(() => {
        setTodoText(props.title)
    }, [props.title])
    const activateEditMode = () => {
        setEdit(true)
    }
    const deactivateEditMode = () => {
        debugger
        props.updateToDo(todoText, props.id, props.userId)
        setEdit(false)
    }
    const setToDo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.currentTarget.value)
    }
    const deleteTodo = () => {
        props.deleteTodo(props.id, props.userId)
    }
    const out = (event: any) => {
        if (event.key === 'Enter') {
            deactivateEditMode()
        }
    }


    return <li>
        {!editMode ? <span>
            {todoText}
        </span> : <div className={s.inputS}>
            <input onChange={setToDo} className='validate' type="text" placeholder='Введите текст' value={todoText}
                   onKeyPress={out}
            /></div>
        }

        {!editMode ? <span>
                <button className='waves-effect cyan lighten-5 btn-small black-text' onClick={activateEditMode}>Изменить
                <i className="material-icons blue-text">create</i></button>
                <button className='waves-effect cyan lighten-5 btn-small black-text' onClick={deleteTodo}>Удалить
                <i className="material-icons red-text">delete</i></button>
                </span>
            : <div className={s.inputS}>
                <button className='waves-effect cyan lighten-5 btn-small black-text'
                        onClick={deactivateEditMode}>Сохранить
                    <i className="material-icons green-text">check</i>
                </button>
            </div>}

    </li>
}