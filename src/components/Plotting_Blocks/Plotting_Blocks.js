import React from "react"
import "./Plotting_Blocks.css"

import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Main from "./components/Main"


const Plotting_Blocks = () => {

    return(
        <div className={'wrapper'} >
            <Header/>
            <div className={'body'}>
                <Navigation/>
                <Main/>
            </div>
        </div>
    )
}

export default Plotting_Blocks;