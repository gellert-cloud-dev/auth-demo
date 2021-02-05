import React,{ useState } from 'react'
import {Router,navigate} from '@reach/router'
import Person from './Person'
import Planet from './Planet'

const LukeApiWalker = () => {

    const [Category, setCategory] = useState('person')
    const [Id, setId] = useState(1)

    const search = (e) => {
        e.preventDefault()
        console.log(`/${Category}/${Id}/`)
        navigate(`/${Category}/${Id}/`)
    }

    return(
        <div>
            <h1>Star Wars API</h1>
            <form onSubmit={ search }>
                <select onChange={ e => setCategory(e.target.value) } defaultValue={'person'}>
                    <option value={'person'}>Person</option>
                    <option value={'planet'}>Planets</option>
                </select>
                <input onChange={ e => setId(e.target.value) } type={'number'} defaultValue={'1'} min={'1'}/>
                <input type={'submit'} value={'Search'}/>
            </form>
            <div>
                <Router>
                    <Person path={'/person/:id'}/>
                    <Planet path={'/planet/:id'}/>
                </Router>
            </div>
        </div>
    )
}
export default LukeApiWalker;