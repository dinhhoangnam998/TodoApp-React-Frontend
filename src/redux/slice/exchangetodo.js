import { createAction, createReducer } from "@reduxjs/toolkit"
import { preloadTodosA } from "./todos"

const startFetching = createAction('start_fetching');
const endFetching = createAction('end_fetching');

const startPosting = createAction('start_posting');
const endPosting = createAction('end_posting');

const fetchingTodo = () => dispatch => {
  dispatch(startFetching());
  return (
    fetch('http://localhost:3001/fetch-todos')
      .then(res => res.json())
      .then(todos => {
        dispatch(endFetching());
        dispatch(preloadTodosA({ todos: todos }))
      })
  )
}

const posttingTodo = () => (dispatch, state) => {
  dispatch(startPosting());
  return (
    fetch('http://localhost:3001/save-todos', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.todoS.todos)
    }).then(res => res.json())
      .then((result) => { dispatch(endPosting({ result: result })) })
  )
}

const exchangeTodoR = createReducer({ isFetching: false, isPosting: false }, {
  [startFetching]: state => { state.isFetching = true; return state },
  [endFetching]: state => { state.isFetching = false; return state },
  [startPosting]: state => { state.isPosting = true; return state },
  [endPosting]: state => { state.isPosting = false; return state }
})

export { exchangeTodoR as default, fetchingTodo, posttingTodo }