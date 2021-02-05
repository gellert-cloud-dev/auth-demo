import { navigate } from '@reach/router'
import React from 'react'
import "./ChatStyles.css"

const ChatName = ({userName, setUserName}) => {

    const inputClick = (e) => {
        let isFirst = e.target.value === "Enter Your Name"
        document.getElementById('userChatName').value =(isFirst ? '' : e.target.value)
    }

    const submitName = (e) => {
        e.preventDefault()
        if(userName !== '' && userName !== 'Enter Your Name'){
            navigate(`/live_chat/${userName}/`)
        }
    }

    return(
        <div>
            <form onSubmit={e=>submitName(e)} className={'chatNameForm'}>
                <input type={'text'} id={"userChatName"} 
                    value={userName} 
                    onChange={e=>setUserName(e.target.value)} 
                    onClick={e=>inputClick(e)} 
                    className={'chatName'}/>
                <button className={'submitName'}>Join!</button>
            </form>
        </div>
    )
}
export default ChatName