import React, { useState } from 'react'
import User from './User'
import "../../styles/Userpage.css"

export default function UserList() {
    const [users, setUsers] = useState([])

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => data.json())
        .then(users => setUsers(users))

    return (
        <div className='user_list'>
            <div className="list_item">
                <h1 className='list_title'>Users who have already logged in:</h1>
            </div>
            <div className="list_item users">
                {
                    users.map((user) => {
                        return <User key={user.id} name={user.name} username={user.username} email={user.email} />
                    })
                }
            </div>


        </div>
    )
}
