import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const id = useParams()
    console.log(id.userId);
  return (
    <div>
        {`Details About User # ${id.userId}`}
    </div>
  )
}
