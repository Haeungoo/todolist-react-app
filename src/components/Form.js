import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class Form extends Component {
    state = {
        todo: ''
    };
    // Event Handler Method 선언
    handleChange = (e) => {
        this.setState({
            todo: e.target.value // todo 의 다음 바뀔 값
        });
    };
    handleCreate = () => {
        const { todo } = this.state;
        this.props.addTodo({
            text : todo,
            checked: false
        });
        this.setState({
            todo:''
        });
    };
    handleKeyPress = (e) => {
        // 눌려진 키가 Enter 이면 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    };
    render() {
        const { todo } = this.props;
        const { handleChange, handleKeyPress, handleCreate } = this;
        return (
            <div className="form">
                <input value={todo} onChange={handleChange}
                    onKeyPress={handleKeyPress} />
                <div className="create-button" onClick={handleCreate}>
                    추가
                </div>
            </div>
        );
    }

};
export default connect(null,{addTodo})(Form);
