import React from 'react'
import InputTodoBar from './InputTodoBar';
import FilterTodoBar from './FilterTodoBar';
import TodoList from './TodoList';

export default function Main() {
  return (
    <main>
      <InputTodoBar></InputTodoBar>
      <TodoList></TodoList>
      <FilterTodoBar></FilterTodoBar>
    </main>
  )
}
