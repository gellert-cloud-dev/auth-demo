import React, { useState } from 'react'
import './Global.css'
import UserForm from './UserForm'
import DisplayInfo from './DisplayInfo'

const HookForm = () => {

    const [state, setState] = useState({
        FirstName : "",
        LastName : "",
        Email : "",
        Password : "",
        ConfirmPass : ""
    })

    return(
        <div className={'wrapper'}>
            <UserForm inputs={state} setInputs={setState}/>
            <DisplayInfo results = {state}/>
        </div>
    )
}

export default HookForm;