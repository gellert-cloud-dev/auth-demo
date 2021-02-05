import React, {useState} from 'react'
import './Global.css'

const DisplayInfo = ({results}) => {

    return(
        <div className={'display_info'}>
            <p>
                First Name: {results.FirstName}
            </p>
            <p>
                Last Name: {results.LastName}
            </p>
            <p>
                Email: {results.Email}
            </p>
            <p>
                Password: {results.Password}
            </p>
            <p>
                Confirm: {results.ConfirmPass}
            </p>
            
        </div>
    )
}
export default DisplayInfo;