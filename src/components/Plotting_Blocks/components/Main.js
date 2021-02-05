import React from 'react'
import '../Plotting_Blocks.css'

import Sub_Content from "./main_comp/Sub_Content"
import Advertisement from "./main_comp/Advertisement"

const Main =()=>{

    return(
        <div className={'main'}>
            <Sub_Content/>
            <Sub_Content/>
            <Sub_Content/>
            <Sub_Content/>
            <Advertisement/>
        </div>
    )
}

export default Main;