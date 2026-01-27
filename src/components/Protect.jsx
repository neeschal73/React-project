import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Protect() {
  return (
    <>
    <div>
      this is project
    </div>
    <Outlet />
    </>
  )
}
