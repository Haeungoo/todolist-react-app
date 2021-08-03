import axios from 'axios';
//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "";
export const REMOVE_TODO = "";
export const TOGGLE_TODO = "TOGGLE_TODO";

const apiUrl = process.env.REACT_APP_APIURL 
//'http://localhost:4500/api/todos';

//4. Todo 갱신
export const toggleTodo = todo => {
    return (dispatch) => {
        axios.put(`${apiUrl}/${todo.id}`, todo)
            .then(res => {
                dispatch({
                    type: TOGGLE_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
}
//3. Todo 삭제
export const removeTodo = id => {
    return (dispatch) => {
        axios.delete(`${apiUrl}/${id}`)
            .then(res => {
                dispatch({
                    type: REMOVE_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
}

//2. Todo 등록
export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(apiUrl, todo)
            .then(res => {
                dispatch({
                    type: ADD_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
}
//1. Todo 리스트
export const fetchTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl)
            .then(res => {
                dispatch({
                    type: FETCH_TODOS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            });
    }
}