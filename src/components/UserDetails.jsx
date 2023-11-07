import { useParams } from 'react-router-dom'
import React from 'react'

export const UserDetails = () => {
    // const {userId} = useParams();
    const params = useParams();
    const userId = params.userId;
  return (
    <div>
        {`Details About User # ${userId}`}
    </div>
  )
}
