import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodoA, toggleTodoA } from "../../redux/slice/todos"
import "../../css/main/TodoItem.css"
import { TODO_STATE } from '../../constances/constances';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const labelClass = todo.state === TODO_STATE.COMPLETE ? 'text-muted complete' : ''
  return (
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id={todo.id} defaultChecked={todo.state === TODO_STATE.COMPLETE} />
      <label className={`custom-control-label text ${labelClass}`} htmlFor={todo.id} onClick={e => dispatch(toggleTodoA({ id: todo.id }))}>{todo.title} </label>
      <button className="close" onClick={e => dispatch(removeTodoA({ id: todo.id }))}>&times;</button>
    </div >
  )
}
