import React,{useEffect, useState} from 'react'
import axios from 'axios';
import loading from '../../images/loading.gif'

const Person = ({id}) => {

    const [Person, setPerson] = useState('')

    const [loadingStatus, setStatus] = useState(true);

    const loadFunction = (res) => {
        setPerson(res.data)
        setStatus(false)
    }

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/`)
            // .then(res => console.log(res))
            .then( res => loadFunction(res))
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
                        <h2>{Person.name}</h2>
                        <p>Height: {Person.height}</p>
                        <p>Mass: {Person.mass}</p>
                        <p>Hair Color: {Person.hair_color}</p>
                        <p>Skin Color: {Person.skin_color}</p>
                    </div>
                }
        </div>
    )
}
export default Person;