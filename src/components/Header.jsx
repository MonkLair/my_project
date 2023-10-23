import React from 'react'
import "../styles/Header.css"
import {Link} from 'react-router-dom'

export default function Header({homePage = '', usersPage = '', chatPage = ''}) {

    return (
        <div className='headerBlock'>
            <div className='header_logo'>
                <Link to='/'><span>Portfolio</span> project</Link>
            </div>
            <div>
                <ul className='nav-list'>
                    <li className={`nav-item ${homePage}`}>
                        <Link to='/'>Home</Link>'
                    </li>
                    <li className={`nav-item ${usersPage}`}>
                        <Link to='/users'>Users</Link>'
                    </li>
                    <li className={`nav-item ${chatPage}`}>
                        <Link to='/chat'>Chat</Link>'
                    </li>
                </ul>
            </div>
        </div>
    )
}
