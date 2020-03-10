import React from 'react'
import { NavLink } from "react-router-dom"
import { FILTER_STATE } from '../../constances/constances'

export default function FilterTodoBar({ numOfItem }) {
  return (
    <section className="border mt-1 py-1 pl-3">
      <small className="mr-5">{numOfItem} {numOfItem <= 1 ? ' item' : ' items'}</small>
      <NavLink to={FILTER_STATE.ALL} className="ml-1 btn btn-sm btn-outline-secondary">All</NavLink>
      <NavLink to={FILTER_STATE.COMPLETE} className="ml-1 btn btn-sm btn-outline-secondary">Complete</NavLink>
      <NavLink to={FILTER_STATE.INCOMPLETE} className="ml-1 btn btn-sm btn-outline-secondary">Incomplete</NavLink>
    </section>
  )
}
