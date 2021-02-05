import React from "react";
import Name_Card from "./Name_Card"

const Prop_It_UP = () => {

    const people = [
        {name: "Doe, Jane", age: 45, hair: "black"},
        {name: "Smith, John", age: 88, hair: "Brown"},
        {name: "Fillmore, Millard", age: 50, hair: "Brown"},
        {name: "Smith, Maria", age: 62, hair: "Brown"},
    ]

    const name_cards = []
    for(var index in people){
        name_cards.push(<Name_Card someProp={ people[index] }/>)
        // console.log(person)
    }

    return(
        <div>
            {/* <h1>Name name_cards:</h1> */}
            {name_cards}
            {/* <Name_Card someProp={ people[0] }/> */}
        </div>
    )
};

export default Prop_It_UP;