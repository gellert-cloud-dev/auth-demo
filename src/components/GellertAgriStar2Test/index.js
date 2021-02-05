import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
import AuthComponent from './AuthComponent'

const Index = (props) => {

    const [agriStarStr, setAgriStarStr] = useState()

    // useEffect(()=>{
    //     console.log('loading...')
    //     fetch("https://216.83.74.163:4432/get/GellertData.jsp", {method:'GET' , mode:'cors'})
    //     .then(response =>{
    //         console.log('...AS2 response',response.text())
    //         return response.text() //this is different than fetch!!! .data vs .json()
    //     }).then( res => {
    //         console.log(res)
    //         setAgriStarStr(res)
    //     }).catch(err => {
    //         console.log('Error....', err);
    //     })
    // },[])

    return(
        <div style={{padding: '20px 40px'}}>
            <h1 style={{textDecoration:'underline'}}> AgriStar2 lList:</h1>
            <div>
                {agriStarStr ? agriStarStr.toString() : 'nothing...'}
            </div>
            <AuthComponent />
        </div>
    )
}
export default Index;