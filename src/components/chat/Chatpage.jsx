import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Chat from './ChatAuth'

export default function Chatpage() {
  return (
    <>
        <Header chatPage='active_page'/>
        <Chat/>
        <Footer/>  
    </>
  )
}
