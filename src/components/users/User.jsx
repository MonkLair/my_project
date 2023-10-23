import React from 'react'

export default function User({name, username, email}) {
  return (
    <div className='user'>
        <p className='user_item'>Name: {name}</p>
        <p className='user_item'>Username: {username}</p>
        <p className='user_item'> Email: {email}</p>
        <br />
    </div>
  )
}
