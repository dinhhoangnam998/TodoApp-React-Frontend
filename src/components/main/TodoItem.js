import React from 'react'

export default function TodoItem() {
  return (
    <div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="" />
        <label className="custom-control-label" htmlFor="">Check this custom checkbox</label>
        <button className="close">&times;</button>
      </div>
    </div>
  )
}
