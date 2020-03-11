import { createAction, createReducer } from "@reduxjs/toolkit"
import { preloadTodosA } from "./todos"
import { SERVER_URI } from "../../setting"

const startFetching = createAction('start_fetching');
const endFetching = createAction('end_fetching');

const startPosting = createAction('start_posting');
const endPosting = createAction('end_posting');

const fetchingTodo = () => dispatch => {
  dispatch(startFetching());
  return (
    fetch(`${SERVER_URI}/fetch-todos`)
      .then(res => res.json())
      .then(todos => {
        setTimeout(() => {
          dispatch(endFetching());
          dispatch(preloadTodosA({ todos: todos }))
        }, 500)
      })
  )
}

const posttingTodo = () => (dispatch, getState) => {
  dispatch(startPosting());
  return (
    fetch(`${SERVER_URI}/save-todos`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getState().todoS.todos)
    }).then(res => res.json())
      .then((result) => { setTimeout(() => { dispatch(endPosting({ result: result })) }, 1000) })
  )
}

const exchangeTodoR = createReducer({ isFetching: false, isPosting: false }, {
  [startFetching]: state => { state.isFetching = true; return state },
  [endFetching]: state => { state.isFetching = false; return state },
  [startPosting]: state => { state.isPosting = true; return state },
  [endPosting]: state => { state.isPosting = false; return state }
})

export { exchangeTodoR as default, fetchingTodo, posttingTodo }