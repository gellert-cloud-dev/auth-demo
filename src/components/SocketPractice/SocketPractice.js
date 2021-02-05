import React,{ useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketPractice = () => {
    const [socket] = useState(() => io(':8000'))
    const [newMessage, setNewMessage] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Is this running?')
        socket.on("First-Welcome", data => console.log("First message: ",data.message))

        //socket.on is an event listener 'Welcome' is the event name. 
        //...this must be the same name given on the server side
        socket.on("Welcome", data => setNewMessage(`Server says: ${data.message}`))

        //listens for update to counter
        socket.on("new-count", data => setCount(data.newCount))

        //return callback to ensure underlying socket closes on unmounting
        //would be more critical if we were creating the socket in a subcomponent
        return () => socket.disconnect(true)
    }, [])

    const clickCounter = () => {
        //emits event 'update-counter' to server with object as 2nd param
        socket.emit("update-counter", {"prevCount": count, "increment":1})
    }

    const clickWelcome = () => {
        //emits event 'message-from-client' to server with object as 2nd param
        socket.emit("message-from-client", {"message": "hey this is the client"} )
    }

    return(
        <div style={{padding: "25px"}}>
            Socket Practice <br/>

            <button onClick={clickWelcome}>Client Says Hello!</button>
            . . . . {newMessage}

            <p>Count = {count}</p>
            <button onClick={clickCounter}>+1</button>
        </div>
    )
}
export default SocketPractice;