import React from 'react'
import {connect} from 'react-redux';
import {updateTodo, deleteTodo, setNewCondition} from '../../../reduxStore/userReducer'
import {compose} from "redux";
import {TodoList} from "./TodoList";
import {AppStateType} from "../../../reduxStore/store";

type PropsType = OwnPropsType & MapDispatchToPropsType
type OwnPropsType ={
    title: string
    id: number
    userId: number
}
type MapDispatchToPropsType ={
    deleteTodo: (id:number, userId:number) => void
    updateTodo: (todoText: string, id:number, userId:number) => void
    setNewCondition: (newCondition: string) => void
}
class TodoContainer extends React.Component<PropsType> {
    render() {
        return <TodoList title={this.props.title} id={this.props.id} userId={this.props.userId}
                         updateToDo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} setNewCondition={this.props.setNewCondition}/>
    }
}

let mapStateToProps = (state: AppStateType) => ({

})

export default compose(
    connect(mapStateToProps, {updateTodo, deleteTodo, setNewCondition}),
)(TodoContainer);