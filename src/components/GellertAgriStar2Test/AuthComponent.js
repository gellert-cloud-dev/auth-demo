import React, { useEffect, useState } from 'react'
// import authConfig from './authConfig'
// import graphConfig from './graphConfig'
import * as msal from '@azure/msal-browser'
// import * as msg from '@azure/msal-common/' 


const msalConfig = {
    auth: {
        clientId: "1877b32e-fba5-4a06-a0fd-6f867ba4ea01",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000",
        // redirectUri: "https://192.168.10.15:3000",

    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        // storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system:{
        asyncPopups: true
    }
}

const myMSALObj = new msal.PublicClientApplication(msalConfig)

const loginRequest = {
    // scopes: ["User.ReadWrite"]
    scopes: ["openid", "profile", "User.Read"]
};

const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/messages"
}

// const tokenRequest = {
//     scopes: ["User.Read", "Mail.Read"]
// };

const AuthComponent = (props) => {

    const [preferredUsername, setPreferredUsername] = useState(
        myMSALObj.getAllAccounts().length > 0 ? 
        myMSALObj.getAllAccounts()[0].username 
        : '--'
    )
    
    useEffect(()=>{
        console.log(myMSALObj.getAllAccounts())
        const preferredName = () => {
            if(myMSALObj.getAllAccounts().length === 1){
                console.log('preferred name = ', myMSALObj.getAllAccounts()[0].username)
                return myMSALObj.getAllAccounts()[0].username
            }
            else if(myMSALObj.getAllAccounts().length > 1){
                // select the correct account
            }
            else{
                // no accounts signed in
            }
        }

        const getSID = () => {
            console.log('getting sid...')
            if(myMSALObj.getAllAccounts().length === 1){
                return myMSALObj.getAllAccounts()[0].idTokenClaims['sid']
            }
        }

        async function attemptSilentSignin () {
        
            const silentRequest = {
                // loginHint: preferredName() 
                sid: getSID()
            } 

            await myMSALObj.ssoSilent(silentRequest)
                .then(resp=>{
                    console.log('silent signin working...', resp)
                    setUsername(resp.account.username)
                })
                .catch(error => {
                    console.log('silent signin error...', error)
                    signIn()
                })   
            
        } 
        if(myMSALObj.getAllAccounts().length === 0){
            console.log('no preferred name...')
            signIn()
        }else{
            console.log('there is a preferred name...')
            attemptSilentSignin()
        }
    },[])

    const [username, setUsername] = useState('--')
    
    const [message, setMessage] = useState('--')

    // myMSALObj.
    function signIn() {
        console.log('Signing in....')

        myMSALObj.loginPopup(loginRequest)
            .then(loginResponse =>{
                const currentAccounts = myMSALObj.getAllAccounts();
                if (currentAccounts === null) {
                    // no accounts detected
                    setMessage('No accounts detected')
                    return;
                } else if (currentAccounts.length > 1) {
                    // Add choose account code here
                    setMessage("Multiple accounts detected.")
                    console.warn("Multiple accounts detected.")
                    return
                } else if (currentAccounts.length === 1) {
                    console.log('Signed in...')
                    setUsername(currentAccounts[0].username)
                }
            })
            .catch(error => {
                    setMessage('sign in failed...')
                    console.error(error)
                }
            )
    }

    const signOut = () => {
        const logoutRequest = {
            account: myMSALObj.getAccountByUsername(username)
        };
    
        myMSALObj.logout(logoutRequest);
    }

    const aquireToken = (request) => {
        request.account = myMSALObj.getAccountByUsername(username)
        return myMSALObj.acquireTokenSilent(request)
            .catch(error => {
                console.log('silent token aquisition failed...')
                if(error instanceof msal.InteractionRequiredAuthError){
                    return myMSALObj.acquireTokenPopup(request)
                        .then(tokenResponse => {
                            console.log('successful token acquistion on popup... ')
                            console.log(tokenResponse)
                            return tokenResponse
                        })
                        .catch(error => {
                            console.error(error)
                        })
                }else {
                    console.log('token popup acquisition failed...')
                    console.warn(error)
                }
            })
    }

    function callMSGraph(endpoint, token, callback) {
        const headers = new Headers();
        const bearer = `Bearer ${token}`;
    
        headers.append("Authorization", bearer);
    
        const options = {
            method: "GET",
            headers: headers
        };
    
        console.log('request made to Graph API at: ' + new Date().toString());
    
        fetch(endpoint, options)
            .then(response => {
                console.log('msGraph Response...')
                return response.json()
            })
            .then(response => callback(response))
            .catch(error => console.log(error));
    }

    const [profile, setProfile] = useState()

    const seeProfile = () => {
        aquireToken(loginRequest)
            .then(response => {
                console.log('calling msGraph...', response)
                callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, setProfile)
            })
            .catch(error => {
                console.log('aquisition of token failed.')
                console.log(error)
            })
    }

    const testingProfile = () => {
        console.log('profile updated...', (profile ? profile : 'nothing...'))
    }

    useEffect(()=>{
        testingProfile()
    },[profile])

    return(
        <div>
            <div>
                <button onClick={signIn} style={{padding:'7px 10px'}}>Sign In</ button>
            </div>
            <div>
                Preferred Username in Cache : {preferredUsername}
            </div> 
            <div>
                Username: {username ? username : '--'}
            </div>
            <div>
                Message: {message ? message.toString() : '--'}
            </div>
            <div>
                <button onClick={seeProfile} style={{padding:'7px 10px'}}>profile</ button>
                {
                    profile ? 
                    <div>
                        {/* {profile.mail} */}
                        here it is: {profile.id}
                    </div>
                    : ''
                }
            </div>
            <div>
                <button onClick={signOut} style={{padding:'7px 10px'}}>Sign Out</ button>
            </div>
        </div>
    )
}
export default AuthComponent;