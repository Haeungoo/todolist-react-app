import React, { Component } from 'react';
import './TodoItem.css';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // scu 메서드가 
        //true를 리턴하면 render(checked가 같지 않음) 메서드가 다시 호출됨
        //false를 리턴하면 render(checked가 같음) 메서드가 다시 호출되지 않는다
        return this.props.checked !== nextProps.checked; 
    }
    handleRemove = (id) => {
        this.props.removeTodo(id);
    }
    handleToggle = (todo) => {
        this.props.toggleTodo(todo);
    }
    render() {
        const { text, checked, id } = this.props;
        const {handleRemove, handleToggle} = this;
        return (
            <div className="todo-item" onClick={() => {
                const todo_obj = {id, text, checked};
                todo_obj.checked = !todo_obj.checked;
                handleToggle(todo_obj);
            }}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    handleRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
export default connect(null,{removeTodo,toggleTodo})(TodoItem);