import React from 'react'

const CustWord = (props) => {

    return(
        <div>
            <h1 style={{backgroundColor: props.bgcolor, color: props.txtcolor}}>The word is: {props.word}</h1>
        </div>
    )
}
export default CustWord;