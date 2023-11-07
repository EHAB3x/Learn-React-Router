import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
        <h2><Link to={'1'}>User 1</Link></h2>
        <h2><Link to={'2'}>User 2</Link></h2>
        <h2><Link to={'3'}>User 3</Link></h2>
        <Outlet/>
        <div>
            <button onClick={()=> setSearchParams({filter: 'active'})}>Active Users</button>
            <button onClick={()=>   setSearchParams({})}>Reset Filters</button>
        </div>
        {
            showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>
        }
    </div>
  )
}
