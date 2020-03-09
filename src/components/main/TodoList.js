import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <section className="mt-1">
      <ul className="list-group">
        <li className="list-group-item">
          <TodoItem></TodoItem>
        </li>
        <li className="list-group-item">
          <TodoItem></TodoItem>
        </li>
        <li className="list-group-item">
          <TodoItem></TodoItem>
        </li>
      </ul>
    </section>
  )
}
