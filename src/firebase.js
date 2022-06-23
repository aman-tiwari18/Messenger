
import firebase from "firebase/compat/app";
import "firebase/auth";
import  initializeApp  from 'firebase/app';


const config = {
    apiKey: "AIzaSyCfCYwbAsN7XSv08uVGehpXRT3QPKwY10k",
    authDomain: "chatapp-3c37c.firebaseapp.com",
    projectId: "chatapp-3c37c",
    storageBucket: "chatapp-3c37c.appspot.com",
    messagingSenderId: "503757562596",
    appId: "1:503757562596:web:e47188bec707eff5ee82f1"
  }

// export const auth =  firebase.initializeApp({
//     apiKey: "AIzaSyCfCYwbAsN7XSv08uVGehpXRT3QPKwY10k",
//     authDomain: "chatapp-3c37c.firebaseapp.com",
//     projectId: "chatapp-3c37c",
//     storageBucket: "chatapp-3c37c.appspot.com",
//     messagingSenderId: "503757562596",
//     appId: "1:503757562596:web:e47188bec707eff5ee82f1"
//   }).auth(); 
const auth  = initializeApp(config);
export default auth;

