import { combineReducers } from 'redux';
import { todosReducer } from './todos.ts';
import { Todo } from '../actions/index.ts';

export interface StoreState {
    todos: Todo[]
};

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});