import React,{ useState } from 'react'
import AddToDo from './AddToDo'
import DisplayToDos from './DisplayToDos'

const ToDoList = (props) => {

    const [nextToDo, setNextToDo] = useState('') 

    const [ToDo, setToDo] = useState([
        {title: 'Get Black Belt', complete: false}, 
        {title: 'Get Red Belt', complete: false}, 
        {title: 'Get Yellow Belt', complete: false}
    ])


    // function for adding todo
    const createToDo = (e) =>{
        e.preventDefault()
        setToDo([...ToDo, {title: nextToDo, complete: false}])
    }

    //toggle complete
    const complete = (i) => {
        let copy = [...ToDo]
        copy[i].complete = !copy[i].complete
        setToDo(copy)
    }

    // function for deleting
    const deleteToDo = (i) => {
        // console.log("Deleting ", i)
        setToDo(ToDo.filter( td => td !== ToDo[i]))
    }

    return(
        <div style={props.style}>
            To Do List
            <AddToDo setNextToDo={ setNextToDo } nextToDo={nextToDo} createToDo={ createToDo }/>
            <DisplayToDos list={ ToDo } statusChange={ complete } deleteToDo={ deleteToDo }/>
        </div>
    )
}
export default ToDoList;