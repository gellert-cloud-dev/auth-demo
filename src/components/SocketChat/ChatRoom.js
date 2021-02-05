import React,{ useEffect, useState } from 'react'
import io from 'socket.io-client'
import './ChatStyles.css'

const ChatRoom = (props) => {
    const [messages, setMessages] = useState([])
    const [newMessage, setMessage] = useState({user: props.userName, message:''})
    const [socket] = useState(() => io(':8000', {query: {'token': props.userName}}))

    useEffect(() => {
        socket.on("new-message", data => {return setMessages(prevMessages => [...prevMessages,data]), scrollToBottom()})

        return () => socket.disconnect(true)
    }, [])

    const sendMessageHandler = (e) => {
        e.preventDefault()
        if(newMessage.message !== ''){
            socket.emit("new-message-post", newMessage)
        }
        setMessage({...newMessage, message: ''})
    }

    const scrollToBottom = () => {
        console.log("fired!!!!!!!")
        document.getElementById( 'bottom' ).scrollIntoView({behavior: "smooth"});
    }

    return(
        <div id={'tester'}>
            <div className={'messageDisplayWindow'}>
                {messages.map((m, index) => 
                        <p key={index}  
                            className={m.user===props.userName ? 'myMessageDisplayBubble' : 'messageDisplayBubble'}>
                            <strong>{m.user}</strong>
                            <br/>{m.message}
                        </p> 
                )}

                <div id={'bottom'}></div>
            </div>
            <form onSubmit={e => sendMessageHandler(e)} className={'chatMessageForm'}>
                <textarea value={newMessage.message} onChange={e => setMessage({...newMessage, message: e.target.value})} className={'chatMessage'} ></textarea>
                <button type={"submit"} className={'sendButton'}>Send</button>
            </form>
        </div>
    )
}
export default ChatRoom