import React,{ useReducer} from 'react'

const initialState = {
    FirstName: {
        Value: '',
        Error: null
    },
    LastName: {
        Value: '',
        Error: null
    },
    Email: {
        Value: '',
        Error: null
    }
}

function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat))
    {
        return true;
    }
    else
    {
        // alert("You have entered an invalid email address!");
        return false;
    }
}


const reducer = (state, action) => {
    //switches, cases and returns
    switch(action.type){
        case "FirstName":
            if(action.payload.length < 2){
                return {...state, FirstName : { Value: action.payload, Error : "First Name must be at leat 2 characters" } }
            }
            else{
                return {...state, FirstName : {Value: action.payload} }
            }
        case "LastName":
            if(action.payload.length < 2){
                return {...state, LastName : { Value: action.payload, Error : "Last Name must be at least 2 characters" } }
            }
            else{
                return {...state, LastName : { Value: action.payload } }
            }
        case "Email" :
            if(ValidateEmail(action.payload) === false){
                return {...state, Email : { Value: action.payload, Error : "Must be a valid Email" } }
            }
            else{
                return {...state, Email : { Value: action.payload } }
            }
        default:
            return state;
    }
}

const ValidateFormReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const changeHandler = (e) => {
        const {name, value} = e.target
        dispatch({
            type: name,
            payload: value       
        })
    }

    return(
        <form>
            <p>
                First Name: <input name="FirstName" onChange={ changeHandler } /> 
                <span>{state.FirstName.Error !== null && state.FirstName.Error}</span> 
            </p>
            <p>
                Last Name: <input name="LastName" onChange={ changeHandler }/>
                <span>{state.LastName.Error !== null && state.LastName.Error}</span> 
            </p>
            <p>
                Email: <input  name="Email" onChange={ changeHandler }/> <span></span>
                <span>{state.Email.Error !== null && state.Email.Error}</span> 
            </p>
        </form>
    )
}

export default ValidateFormReducer;