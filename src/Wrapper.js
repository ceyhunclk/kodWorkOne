import React from "react";
import Auth from "./store/Auth";
import Router from "./Router";
import 'react-native-gesture-handler'
const Wrapper=()=>{
    return(
        <Auth>
            <Router></Router>
        </Auth>
    )
}
export default Wrapper;