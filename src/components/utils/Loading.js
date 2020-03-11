import React from 'react'

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: 400, fontSize: 40}} >
      Loading... <span className="spinner-border text-success"></span>
    </div>
  )
}
