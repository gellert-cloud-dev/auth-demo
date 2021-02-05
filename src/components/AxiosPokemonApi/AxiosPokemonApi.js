import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonApi = () => {

    const [Pokes, setPokes] = useState([])

    const fetchEm = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response =>{
            return response.data //this is different than fetch!!! .data vs .json()
        }).then( res => {
            console.log(res)
            setPokes(res.results)
        }).catch(err => {
            console.log(err);
        })
    }

    //this will reRender the component when Pokes variable changes
    // useEffect(() => {},[Pokes]) //somehow it re renders without this useEffect deal??

    return(
        <div>
            <button onClick={fetchEm}>Fetch Pokemon</button>
            {Pokes.map( (p,i) => <p key={i}>{i+1}. {p.name}</p>)}
        </div>
    )
}
export default PokemonApi;