import { createAction, createReducer } from "@reduxjs/toolkit"
import { v4 } from "uuid";
import { TODO_STATE } from "../../constances/constances";

const addTodoA = createAction('addTodoA');
const toggleTodoA = createAction('toggleTodoA');
const removeTodoA = createAction('removeTodoA');
const preloadTodosA = createAction('preloadTodosA');

const addTodoH = (state, action) => {
  const newTodo = {
    id: v4(),
    title: action.payload.title,
    state: TODO_STATE.INCOMPLETE,
  };
  state.todos.push(newTodo);
  return state;
}

const toggleTodoH = (state, action) => {
  const todo = state.todos.find(todo => todo.id === action.payload.id);
  if (todo.state === TODO_STATE.COMPLETE) todo.state = TODO_STATE.INCOMPLETE;
  else todo.state = TODO_STATE.COMPLETE;
  return state;
}

const removeTodoH = (state, action) => {
  state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
  return state;
}

const preloadTodosH = (state, action) => {
  state.todos = action.payload.todos;
  return state;
}

const todoR = createReducer({ todos: [] }, {
  addTodoA: addTodoH,
  toggleTodoA: toggleTodoH,
  removeTodoA: removeTodoH,
  preloadTodosA: preloadTodosH,
})

export { todoR as default, addTodoA, toggleTodoA, removeTodoA, preloadTodosA }