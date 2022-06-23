import React from "react";
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
import firebase  from "firebase/compat";
import  {auth} from "./firebase";

function  Login(){


    return (
        <div id = "login-page">
            <div id = "login-card">
                <h2>Welcome to chitchat</h2>
                <div className = "login-button google"
                    onClick = {()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign in with google
                </div>
                <br/> <br/>
                <div className = "login-button facebook"
                    onClick = {()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined/> Sign in with facebook
                </div>

            </div>
        </div>
        
    )
}

export default Login;