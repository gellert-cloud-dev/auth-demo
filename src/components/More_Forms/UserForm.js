import React, { useState } from 'react'
import './Global.css'



const UserForm = ({inputs, setInputs}) => {

    const [firstNameErrors, setFirstNameErrors] = useState("")
    const [lastNameErrors, setLastNameErrors] = useState("")
    const [emailErrors, setEmailErrors] = useState("")
    const [passwordErrors, setPasswordErrors] = useState("")
    
    const createUser = (e) => {
        console.log(inputs)
        e.preventDefault();
        //validates inputs and throw errors
        if(inputs.FirstName[0] == undefined || inputs.FirstName[0].length < 2){
            setFirstNameErrors( "First Name must be at least 2 characters" )
        }
        else{
            setFirstNameErrors("")
        }

        if(inputs.LastName[0] == undefined || inputs.LastName[0].length < 2){
            setLastNameErrors( "Last Name must be at least 2 characters" )
        }
        else{
            setLastNameErrors("")
        }

        if(inputs.Email[0] == undefined || inputs.Email[0].length < 5){
            setEmailErrors( "Email must be at least 5 characters!" )
        }
        else{
            setEmailErrors("")
        }

        if(inputs.Password[0] != inputs.ConfirmPass[0]){
            setPasswordErrors("Password and Confirmation fields do not match")
        }
        else if(inputs.Password[0] == undefined || inputs.Password[0].length < 8){
            setPasswordErrors("Password must be at least 8 characters")
        }
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
                
                    {firstNameErrors ? <div className={"validations"} >{firstNameErrors}</div> : ''}

                <div className={'form_line'}>
                    Last Name: <input name={'LastName'} onChange={ updateForm } className={'input'} type="text"/>
                </div>

                    {lastNameErrors ? <div className={"validations"} >{lastNameErrors}</div> : ''}

                <div className={'form_line'}>
                    Email: <input name={'Email'} onChange={ updateForm } className={'input'} type="text"/>
                </div>

                    {emailErrors ? <div className={"validations"} >{emailErrors}</div> : ''}    

                <div className={'form_line'}>
                    Password: <input name={'Password'} onChange={ updateForm } type={'password'} className={'input'}/>
                </div>

                    {passwordErrors ? <div className={"validations"} >{passwordErrors}</div> : ''}    

                <div className={'form_line'}>
                    Confirm: <input name={'ConfirmPass'} onChange={ updateForm } type={'password'} className={'input'}/>
                </div>
                <div className={'form_line'}>
                    <input type={"submit"} className={'btn'} value="Create User"/>
                </div>
            </form>
        </div>
    )
}

export default UserForm;
