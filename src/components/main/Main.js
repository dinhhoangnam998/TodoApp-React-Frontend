import React from 'react'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import InputTodoBar from './InputTodoBar';
import FilterTodoBar from './FilterTodoBar';
import TodoList from './TodoList';

import { FILTER_STATE } from "../../constances/constances"

export default function Main() {
  const todos = useSelector(state => state.todoS.todos);
  const { filter } = useParams();
  const visibleTodoList = getVisibleTodoList(todos, filter);
  const numOfItem = visibleTodoList.length;
  return (
    <main>
      <InputTodoBar></InputTodoBar>
      <TodoList todos={visibleTodoList}></TodoList>
      <FilterTodoBar numOfItem={numOfItem}></FilterTodoBar>
    </main>
  )
}

function getVisibleTodoList(todos = [], filter = FILTER_STATE.ALL) {
  if (filter === FILTER_STATE.ALL) {
    return todos;
  } else {
    return todos.filter(todo => todo.state === filter)
  }
}

