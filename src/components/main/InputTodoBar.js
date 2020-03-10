import React from 'react'
import { useDispatch } from "react-redux"
import { addTodoA } from "../../redux/slice/todos"

export default function InputTodoBar() {
  const dispatch = useDispatch();
  return (
    <section>
      <input type="text" className="form-control" placeholder="Add you todo..." onKeyPress={e => keyPressH(e, dispatch)} />
    </section>
  )
}

const keyPressH = (e, dispatch) => {
  if (e.key === "Enter" && e.target.value !== "") {
    dispatch(addTodoA({ title: e.target.value }));
    e.target.value = "";
  }
}
