import React from 'react'
import {Users} from './Users'
import {connect} from 'react-redux';
import {getUsers, getTodo, addNewTodo, ToDoType, UsersType} from '../../reduxStore/userReducer'
import {compose} from "redux";
import {AppStateType} from "../../reduxStore/store";

type PropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType ={
    users: Array<UsersType>
    todo: Array<ToDoType>
}
type MapDispatchToPropsType ={
    getUsers: () => void
    getTodo: () => void
    addNewTodo: (newTodo: ToDoType) => void
}



class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers()
        this.props.getTodo()
    }

    render() {

        return <Users users={this.props.users} todo={this.props.todo} addNewTodo={this.props.addNewTodo}
        />
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    todo: state.usersPage.todo
})

export default compose(
    connect(mapStateToProps, {getUsers, getTodo, addNewTodo}),
)(UsersContainer);