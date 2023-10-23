import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import UserList from './UserList'

export default function Userspage() {
  return (
    <>
        <Header usersPage='active_page'/>
        <UserList/>
        <Footer/>
    </>
  )
}
