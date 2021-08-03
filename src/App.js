import React, { Component } from 'react';
import Form from './components/Form.js';
import TodoItemList from './components/TodoItemList.js';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  // 렌더링 (LifeCycle Method)
  render() {
    return (
      <div>
        <TodoListTemplate form={<Form/>}>
          <div>
            <TodoItemList/>
          </div>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;