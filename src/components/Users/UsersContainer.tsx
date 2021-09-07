import React from 'react'
import {Users} from './Users'
import {connect} from 'react-redux';
import {getUsers, getTodo, addNewTodo, setNewCondition, ToDoType, UsersType} from '../../reduxStore/userReducer'
import {compose} from "redux";
import {AppStateType} from "../../reduxStore/store";

type PropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType ={
    users: Array<UsersType>
    todo: Array<ToDoType>
    condition: string | undefined
}
type MapDispatchToPropsType ={
    getUsers: () => void
    getTodo: () => void
    addNewTodo: (newTodo: ToDoType) => void
    setNewCondition: (newCondition: string) => void
}



class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers()
        this.props.getTodo()
    }

    render() {

        return <Users users={this.props.users} todo={this.props.todo} addNewTodo={this.props.addNewTodo}
                      condition={this.props.condition} setNewCondition={this.props.setNewCondition}
        />
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    todo: state.usersPage.todo,
    condition: state.usersPage.condition
})

export default compose(
    connect(mapStateToProps, {getUsers, getTodo, addNewTodo, setNewCondition}),
)(UsersContainer);