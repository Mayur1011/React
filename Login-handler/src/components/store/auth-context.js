import React from "react";

//component white state
// this is not a component AuthContext is an object.
const AuthContext = React.createContext({
    isLoggedIn: false,
});
export default AuthContext;
