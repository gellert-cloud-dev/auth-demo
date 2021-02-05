import React from 'react'
import './Styles.css'

const BoxDisplay = (props) => {

    return(
        <div>
            Box Display
            {props.boxes && 
                <div className={"box_display"}>
                    {props.boxes.map( (item) => <div className={"box"} style={{backgroundColor: `${item}`}}></div> )}
                </div>
            }
        </div>
    )
}

export default BoxDisplay;