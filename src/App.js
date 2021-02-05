import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import First_Project from './components/First_Project/First_Project'
// import Prop_It_Up from './components/Prop_It_Up/Prop_It_Up'
// import Plotting_Blocks from './components/Plotting_Blocks/Plotting_Blocks'
//below is for Big_Inversion
// import Prop_It_Up from './components/Big_Inversion/Prop_It_Up'
// import HookForm from './components/Hook_Form/HookForm'
// import More_Forms from './components/More_Forms/More_Forms'
// import ValidateFormReducer from './components/ValidateFormReducer/ValidateFormReducer'
// import BoxGenerator from './components/BoxGenerator/BoxGenerator'
// import Tabs from './components/Tabs/Tabs'
// import PokemonApi from './components/PokemonApi/PokemonApi'
// import AxiosPokemonApi from './components/AxiosPokemonApi/AxiosPokemonApi'
// import RoutingPractice from './components/RoutingPractice/RoutingPractice'
// import LukeApiWalker from './components/LukeApiWalker/LukeApiWalker'
// import SocketPractice from './components/SocketPractice/SocketPractice'
// import SocketChat from './components/SocketChat/SocketChat'
// import ToDoList from './components/ToDoList/ToDoList'
// import AgriStar2List from './components/GellertAgriStar2Test/index'

import AuthToDoApp from './components/AuthToDoApp/AuthToDoApp'
import * as msal from "@azure/msal-browser";
import { MsalProvider } from '@azure/msal-react';


const configuration = {
  auth: {
      clientId: "1877b32e-fba5-4a06-a0fd-6f867ba4ea01",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    // storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  // system:{
    // windowHashTimeout: 60000,
    // iframeHashTimeout: 6000,
    // loadFrameTimeout: 0,
    // asyncPopups: true
  // }
};

const pca = new msal.PublicClientApplication(configuration);


function App() {
  return (
    <div className={'wrapper'} >
      <MsalProvider instance={pca}>
        <AuthToDoApp />
      </MsalProvider>
      {/* <AgriStar2List /> */}
      {/* <ToDoList style={{margin:'auto', maxWidth:'50%', padding:'20px'}}/> */}
      {/* <SocketChat /> */}
      {/* <SocketPractice/> */}
      {/* <LukeApiWalker/> */}
      {/* <RoutingPractice /> */}
      {/* <AxiosPokemonApi/> */}
      {/* <PokemonApi/> */}
      {/* <Tabs/> */}
      {/* <BoxGenerator/> */}
      {/* <ValidateFormReducer/> */}
      {/* <More_Forms/> */}
      {/* <HookForm/> */}
      {/* <Plotting_Blocks /> */}
      {/* <First_Project /> */}
      {/* <Prop_It_Up /> */}
    </div>
  );
}

export default App;
