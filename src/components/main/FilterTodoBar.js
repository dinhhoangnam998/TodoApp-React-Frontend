import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { posttingTodo } from "../../redux/slice/exchangetodo"
import { NavLink } from "react-router-dom"
import { FILTER_STATE } from '../../constances/constances'

export default function FilterTodoBar({ numOfItem }) {
  const dispatch = useDispatch();
  const isSaving = useSelector(state => state.exchangeTodoS.isPosting)
  return (
    <section className="border mt-1 py-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <small className="mr-5">{numOfItem} {numOfItem <= 1 ? ' item' : ' items'}</small>
          </div>
          <div className="col-6">
            <NavLink to={FILTER_STATE.ALL} activeClassName="active" className="ml-1 btn btn-sm btn-outline-secondary ">All</NavLink>
            <NavLink to={FILTER_STATE.COMPLETE} activeClassName="active" className="ml-1 btn btn-sm btn-outline-secondary">Complete</NavLink>
            <NavLink to={FILTER_STATE.INCOMPLETE} activeClassName="active" className="ml-1 btn btn-sm btn-outline-secondary">Incomplete</NavLink>
          </div>
          <div className="col-3">

            <button className="btn btn-sm btn-outline-primary float-right" onClick={(e) => dispatch(posttingTodo())}>
              {isSaving ? (<> <span>Saving... </span><span className="spinner-border spinner-border-sm"></span></>) : 'Save'}
            </button>
          </div>
        </div>


      </div>
    </section>
  )
}
