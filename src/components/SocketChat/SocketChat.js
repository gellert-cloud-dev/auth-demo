import React,{ useState} from 'react'
// import io from 'socket.io-client'
import {Router} from '@reach/router'
import ChatName from './ChatName'
import ChatRoom from './ChatRoom'
import "./ChatStyles.css"

const SocketChat = () => { 

    const [userName, setUserName] = useState('Enter Your Name')
    // const [socket] = useState(()=>io(':8000'))

    // useEffect(()=>{
    //     socket.on("First-Welcome", data => console.log("First message: ",data.message))

    // })

    return(
        <div className={'socketChat'}><br/>
            <div className={'header'}><p>Lawson House Chat</p></div>
            <Router>
                <ChatName path={'/'} userName={userName} setUserName={setUserName}/>
                <ChatRoom path={'/live_chat/:userName/'}/>
            </Router>
        </div>
    )
}
export default SocketChat