import React from "react";
import { Provider } from "react-redux";
import store from "./index"
const Auth=({children})=>{
    return(
       <Provider store={store}>
        {children}
        </Provider>
    )
}
export default Auth;