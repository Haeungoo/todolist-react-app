import React, { Component } from 'react';
import {connect} from 'react-redux';

import TodoItem from './TodoItem';
import { fetchTodos } from '../actions';

class TodoItemList extends Component {
    // mount된 후에 호출되는 lifecycle method
    componentDidMount() {
        this.props.fetchTodos();
    }
    // scu 메서드가 
    //true를 리턴하면 render(todos가 같지 않음) 메서드가 다시 호출됨
    //false를 리턴하면 render(todos가 같음) 메서드가 다시 호출되지 않는다
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos; 
    }
    render() {
        const { todos } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default connect(
    (state) => ({
        todos : state.todos
    }),
    {
        fetchTodos

    }
)(TodoItemList);