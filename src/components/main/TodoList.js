import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <section className="mt-1">
      <ul className="list-group">
        {todos.map(todo => <li key={todo.id} className="list-group-item"><TodoItem todo={todo}></TodoItem> </li>)}
      </ul>
    </section>
  )
}
