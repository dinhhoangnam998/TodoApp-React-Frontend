import { combineReducers } from "redux"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import todoR from "./slice/todos"
import exchangeTodoR from "./slice/exchangetodo"
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({ todoS: todoR, exchangeTodoS: exchangeTodoR });
const store = configureStore({ reducer: rootReducer, middleware: [...getDefaultMiddleware(), thunkMiddleware] });

export default store;