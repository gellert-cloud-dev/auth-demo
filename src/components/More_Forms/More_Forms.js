import React, { useState } from 'react'
import './Global.css'
import UserForm from './UserForm'

const More_Forms = () => {

    const [state, setState] = useState({
        FirstName : "",
        LastName : "",
        Email : "",
        Password : "",
        ConfirmPass : "",
        Submitted: false
    })

    return(
        <div className={'wrapper'}>
            <h3>More Forms</h3>
            <UserForm inputs={state} setInputs={setState}/>
            {/* <DisplayInfo results = {state}/> */}
        </div>
    )
}

export default More_Forms;