import React,{useEffect, useState} from 'react'
import axios from 'axios';
import loading from '../../images/loading.gif'

const Planet = ({id}) => {

    const [Planet, setPlanet] = useState('')

    const [loadingStatus, setStatus] = useState(true);

    const loadFunction = (res) => {
        setPlanet(res.data)
        setStatus(false)
    }

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            // .then(res => console.log(res))
            .then(res => loadFunction(res))
            .catch( err=> {
                if(err.response){ //if there was an error response from server
                    alert("These aren't the droids you are looking for...") 
                }
                else if(err.request){  //if request never left or no response
                    alert("These aren't the droids you are looking for...")
                }
                else{ //anything else
                    alert("These aren't the droids you are looking for...")
                }
            })
    },[id])

    return(
        <div>
            {loadingStatus ? 
                <img src={loading} alt="Logo" style={{width: "250px"}}/> :
            <div>
                <h2>{Planet.name}</h2>
                <p>Climate: {Planet.climate}</p>
                <p>Terrain: {Planet.terrain}</p>
                <p>Surface Water: {Planet.surface_water}</p>
                <p>Population: {Planet.population}</p>
            </div>
            }
        </div>
    )
}
export default Planet;
