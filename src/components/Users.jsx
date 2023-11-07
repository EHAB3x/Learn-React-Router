import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Users = () => {
  return (
    <div>
        <h2><Link to={'1'}>User 1</Link></h2>
        <h2><Link to={'2'}>User 2</Link></h2>
        <h2><Link to={'3'}>User 3</Link></h2>
        <Outlet/>
    </div>
  )
}
