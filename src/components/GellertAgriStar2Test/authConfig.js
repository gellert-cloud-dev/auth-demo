
const authConfig = {
    msalConfig : {
        auth: {
            clientId: "1877b32e-fba5-4a06-a0fd-6f867ba4ea01",
            authority: "https://login.microsoftonline.com/common",
            redirectUri: "http://localhost:3000",
        },
        cache: {
            cacheLocation: "sessionStorage", // This configures where your cache will be stored
            storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        }
    },
    loginRequest : {
        scopes: ["openid", "profile", "User.Read"]
    },
    tokenRequest : {
        scopes: ["User.Read", "Mail.Read"]
    }
}
export default authConfig;