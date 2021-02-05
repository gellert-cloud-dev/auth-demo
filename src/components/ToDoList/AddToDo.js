import React from 'react'

const AddToDo = ({setNextToDo, nextToDo, createToDo}) => {
    //update form prop as input changes
    const updateToDo = (e) => {
        setNextToDo(e.target.value)
    }

    return(
        <>
            <form onSubmit={ createToDo }>
                <input onChange={ (e) => updateToDo(e) } />
                <input type={'submit'} value={'Add To Do'}/>
            </form>
        </>
    )
}
export default AddToDo;