import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types.ts';

export interface Todo {
    id: number,
    title: string,
    completed: boolean
};

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos,
    payload: Todo[]
};

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number
};

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispach: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispach<FetchTodosAction>({ 
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return { 
        type: ActionTypes.deleteTodo, 
        payload: id
    };
};