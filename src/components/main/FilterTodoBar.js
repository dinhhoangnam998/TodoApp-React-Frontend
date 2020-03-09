import React from 'react'

export default function FilterTodoBar() {
  return (
    <section className="border mt-1 py-1 pl-3">
      <small className="mr-5">9999 items</small>
      <button className="ml-1 btn btn-sm btn-outline-secondary">All</button>
      <button className="ml-1 btn btn-sm btn-outline-secondary">Complete</button>
      <button className="ml-1 btn btn-sm btn-outline-secondary">Incomplete</button>
    </section>
  )
}
