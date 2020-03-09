import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import todoR from "./slice/todos"

const rootReducer = combineReducers({ todoR });
const store = configureStore({ reducer: rootReducer });

export default store;