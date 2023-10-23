import React, { useEffect, useRef, useState } from 'react'
import "../../styles/Chat.css"

export default function ChatAuth() {
    const [passwordInput, setPasswordInput] = useState(document.getElementById('pass'))
    const [loginInput, setLoginInput] = useState(document.getElementById('login'))

    useEffect(() => {
        setLoginInput(document.getElementById('login'))
        setPasswordInput(document.getElementById('pass'))
    },[])

    const chatMessageRef = useRef(null)
    const inputRef = useRef(null)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    console.log(loginInput)
    function handleAuthSubmit(e) {
        e.preventDefault()
        if(password.length > 7){
            passwordInput.classList.remove('error')
        }
        if(login !== ''){
            loginInput.classList.remove('error')
        }
        if (password.length < 7) {
            passwordInput.classList.add('error')
        }
        if (!login) {
            loginInput.classList.add('error')
        }
        if(password.length > 7 && login !== '' ){
            passwordInput.classList.remove('error')
            loginInput.classList.remove('error')
            localStorage.setItem('login', login)
            localStorage.setItem('password', password)
            setLogin('')
            setPassword('')
        }

    }

    function loginHandler(e) {
        setLogin(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function hadleFormSubmit(e) {
        e.preventDefault()
        const message = inputRef.current.value
        inputRef.current.value = ''
        send(message)
    }

    function send(message) {
        const messageItem = document.createElement('p')
        messageItem.textContent = "You: " + message
        messageItem.classList.add('message')

        chatMessageRef.current.appendChild(messageItem)

        setTimeout(() => {
            chatMessageRef.current.removeChild(messageItem)
        }, 10000)
    }

    return (
        <div className='chat_auth'>
            <form onSubmit={handleAuthSubmit} className="auth_form">
                <input className='auth_login' id='login' onChange={loginHandler} value={login} type="text" placeholder='Enter your login' /> <br />
                <input className='auth_password' id='pass' onChange={passwordHandler} value={password} type="password" placeholder='Enter your password' /> <br />
                <button className='auth_button' type="submit" >Authorize</button>
            </form>
            <div className='chat'>
                <div className='chat_field'>
                    <div ref={chatMessageRef} className='chat_messages'></div>
                </div>
                <div className='chat_inputs'>
                    <form onSubmit={hadleFormSubmit} className="chat_form">
                        <input ref={inputRef} className='chat_input' type='text' placeholder='Enter a message' maxLength='30' />
                        <input className='chat_button' type='submit' value='Send' />
                    </form>
                </div>
            </div>
        </div>


    )
}
