import React, { Component, useState } from 'react';

const Name_Card = (props) => {

    const [age, setAge] = useState(props.age);
    const increaseAge = () => {setAge(age+1)}

    return(
        <div style={{padding: 20}}>
            <h4>Name: {props.name}</h4>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hair}</p>
            <button onClick={increaseAge}>Birthday Button for {props.name}</button>
        </div>
    )
}

export default Name_Card;