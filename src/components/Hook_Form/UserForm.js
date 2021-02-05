import React, { useState } from 'react'
import './Global.css'



const UserForm = ({inputs, setInputs}) => {
    
    const createUser = (e) => {
        e.preventDefault();
        console.log("User Created")
    }

    const updateForm = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]:[e.target.value]
        })
    }

    return(
        <div className={'form_container'}>
            <form  onSubmit={ createUser }>
                <div className={'form_line'}>
                    First Name: <input name={'FirstName'} onChange={ updateForm } className={'input'} type="text"/>
                </div>
                <div className={'form_line'}>
                    Last Name: <input name={'LastName'} onChange={ updateForm } className={'input'} type="text"/>
                </div>
                <div className={'form_line'}>
                    Email: <input name={'Email'} onChange={ updateForm } className={'input'} type="text"/>
                </div>
                <div className={'form_line'}>
                    Password: <input name={'Password'} onChange={ updateForm } type={'password'} className={'input'} type="text"/>
                </div>
                <div className={'form_line'}>
                    Confirm: <input name={'ConfirmPass'} onChange={ updateForm } type={'password'} className={'input'} type="text"/>
                </div>
                <div className={'form_line'}>
                    <input type={"submit"} className={'btn'} value="Create User"/>
                </div>
            </form>
            {/* <p>This is firstname : {FirstName}</p> */}
        </div>
    )
}

export default UserForm;