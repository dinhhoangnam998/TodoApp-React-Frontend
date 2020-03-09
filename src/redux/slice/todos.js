import { createAction, createReducer } from "@reduxjs/toolkit"
import { v4 } from "uuid";

const TODO_STATE = {
  COMPLETE: true,
  INCOMPLETE: false,
}

const addTodoA = createAction('addTodoA');
const toggleTodoA = createAction('toggleTodoA');
const removeTodoA = createAction('removeTodoA');

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
  const todo = state.todos.find(todo => todo.id = action.payload.id);
  todo.state = !todo.state;
  return state;
}

const removeTodoH = (state, action) => {
  return state.todos.filter(todo => todo.id != action.payload.id);
}

const todoR = createReducer({ todos: [] }, {
  addTodoA: addTodoH,
  toggleTodoA: toggleTodoH,
  removeTodoA: removeTodoH,
})

export { todoR as default, addTodoA, toggleTodoA, removeTodoA }