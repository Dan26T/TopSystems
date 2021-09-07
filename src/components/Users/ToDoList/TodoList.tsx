import {Button, Col, Divider, Input, Row} from 'antd';
import React, {useState, useEffect, ChangeEvent} from 'react'
import s from './todo.module.css';
import {
    CheckCircleOutlined,
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';

type PropsType = {
    title: string
    id: number
    userId: number
    deleteTodo: (id:number, userId:number) => void
    updateToDo: (todoText: string, id:number, userId:number) => void
    setNewCondition: (newCondition: string) => void
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
        props.updateToDo(todoText, props.id, props.userId)
        setEdit(false)
        props.setNewCondition('info')
        clearCondition()
    }
    const clearCondition = () => setTimeout(() => props.setNewCondition(''), 3000)

    const setToDo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.currentTarget.value)
    }
    const deleteTodo = () => {
        props.deleteTodo(props.id, props.userId)
        props.setNewCondition('error')
        clearCondition()
    }
    const out = (event: any) => {
        if (event.key === 'Enter') {
            deactivateEditMode()
        }
    }


    return <li style={{marginTop: 20, listStyle: 'none'}}>
        <Row>
            <Col flex="1 1 200px">
                {!editMode ? <span>
            {todoText}
        </span> : <div >
                    <Input onChange={setToDo} className='validate' type="text" placeholder='Введите текст' value={todoText}
                           onKeyPress={out}
                    /></div>
                }
            </Col>
            <Col flex="0 1 300px">
                {!editMode ? <span>
             <Button type="primary"  style={{marginRight: 10 }}
                     onClick={activateEditMode}>Изменить <EditOutlined />
                </Button>
            <Button danger onClick={deleteTodo}>Удалить <DeleteOutlined /></Button>
                </span>
                    : <div>
                        <Button style={{marginLeft: 5 }}
                            onClick={deactivateEditMode}>Сохранить <CheckCircleOutlined />
                        </Button>
                    </div>}
            </Col>
        </Row>




    </li>
}