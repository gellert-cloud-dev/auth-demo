import React,{ useState } from 'react'
import './Styles.css'
// import Tab from './Tab'


const Tabs = () => {

    const Tab1 = {name : 'Tab1', content : "This is the Tab1 Content"}
    const Tab2 = {name : 'Tab2', content : "This is the Tab2 Content"}
    const Tab3 = {name : 'Tab3', content : "This is the Tab3 Content"}

    const [Tabs, setTabs] = useState([Tab1, Tab2, Tab3])

    const viewTab = (tabName) => {
        //change displayed content
        document.getElementById('info').innerHTML = Tabs.find(t => t.name === tabName).content
        //set all tabs to white bgcolor
        let test = document.getElementsByClassName('tab')
        for(var t=0; t<test.length; t++){
            console.log("t",test[t])
            test[t].style.backgroundColor='white';
        }
        //change target tab bgcolor to grey
        document.getElementById(tabName).style.backgroundColor="lightgrey";
    }

    return(
        <>
            <div className={'tabs'}>
            {Tabs.map( (tab, index) =>  <div id={tab.name} key={index} className={"tab"} onClick={ () => viewTab(tab.name) }> {tab.name} </div>)}
    
            </div>
            <div id={'info'} className={"tab_info "}>

            </div>
        </>
    )    
}

export default Tabs;