import React from 'react'

const DisplayToDos = ({list, statusChange, deleteToDo}) =>{
    //recieve an array of to dos and map them into elements to display
    
    const mystyle = {
        textDecoration: "line-through",
    }

    return(
        <>
        Display To Do's below
        {list.length !== 0 && list.map( (td, i) => {
            return(
                <p key={i}>
                    <input type={'checkbox'} onChange={ () => statusChange(i) }/>
                    <span style={ td.complete ? mystyle : null } >{td.title}</span>
                    <button style={{ marginLeft : "10px"}} onClick={ () => deleteToDo(i) }>Delete</button>
                </p>)
            } 
        )}
        </>
    )
}
export default DisplayToDos;