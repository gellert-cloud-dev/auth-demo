import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import Number from './Number'
import Word from './Word'
import CustWord from './CustWord'
const RoutingPractice = () => {


    return(
        <div>
            <Router>
                <Home path={'/'}/>
                
                <Number exact path={'/num/:num'}/>
                <Word exact path={'/word/:word'} />

                <CustWord path={'/:word/:bgcolor/:txtcolor'}/>
            </Router>
        </div>
    )
}
export default RoutingPractice;