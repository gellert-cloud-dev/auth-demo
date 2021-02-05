import React, { useEffect } from 'react'
import ToDoListApp from '../ToDoList/ToDoList' 

// import * as msal from "@azure/msal-browser";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

// const configuration = {
//     auth: {
//         clientId: "1877b32e-fba5-4a06-a0fd-6f867ba4ea01",
//         authority: "https://login.microsoftonline.com/common",
//         redirectUri: "http://localhost:3000",
//     }
// };

const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
};

// const pca = new msal.PublicClientApplication(configuration);

const AuthToDoApp = (props) => {

    const { instance, accounts, inProgress } = useMsal()
    useEffect(()=>{
        // instance.loginPopup(loginRequest)
        //     .catch(error => console.log(error))
        let testACCt = instance.getAllAccounts()
        // instance.ssoSilent({loginHint:  testACCt[0].username })
        console.log(accounts, instance, testACCt)
    },[])

    

    const userStatus = () => {
        if (accounts.length > 0) {
            return <span>There are currently {accounts.length} users signed in!</span>
        } else if (inProgress === "login") {
            return <span>Login is currently in progress!</span>
        } else {
            return (
                <>
                    <span>There are currently no users signed in!</span><br/>
                    <button style={{margin: '10px', padding: '5px 10px'}} 
                        onClick={() => 
                            instance.loginPopup(loginRequest)
                                .catch(error => console.log(error))
                        }    
                    >
                       Login
                    </button>

                </>
            );
        }
    }

    return(
        <div
            style={{margin:'auto', minWidth:'50%', maxWidth:'900px', padding:'20px', textAlign: 'center'}}
        >

            <h1>
                Atheniticated To do App:
            </h1>
            <AuthenticatedTemplate>
                <ToDoListApp 

                />  
                <button style={{margin: '10px', padding: '5px 10px'}} 
                        onClick={() => 
                            instance.logout(loginRequest)
                                .catch(error => console.log(error))
                        }    
                >
                    Logout
                </button>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate >
                <p style={{textAlign: 'center'}}>No users are signed in!</p>
            </UnauthenticatedTemplate>

            <h4>
                { userStatus() }
            </h4>

        </div>
)}
export default AuthToDoApp;