import React, { useState } from 'react'



const BoxInput = (prop) => {

    const [FormData, setFormData] = useState({color : ''})

    const changeHandler = (e) => {
        setFormData({color : e.target.value})
    }
    
    const Submit = (e) =>{
        e.preventDefault()
        if(FormData !== undefined){
            prop.newBox(FormData.color)
            setFormData({color : ''})
        }    
    }

    return(
        <div>
            Input info 
            <form onSubmit={ Submit }>
                Color: 
                <input name="color" onChange={ changeHandler } value={FormData.color} />
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default BoxInput;