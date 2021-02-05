import React, {useState } from 'react'
import BoxInput from './BoxInput'
import BoxDisplay from './BoxDisplay'

const BoxGenerator = () => {

    // const [Color, setColor] = setState('')
    const [Boxes, setBoxes] = useState([])

    const NewBox = (newColor) => {
        setBoxes([...Boxes, newColor])
        console.log("Boxes: ", Boxes)
    }

    return(
        <>
            <BoxInput newBox={NewBox}/>
            <BoxDisplay boxes={Boxes}/>
        </>
    )
}

export default BoxGenerator;