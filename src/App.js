
import './App.css';
import React from 'react';

import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";

import Login from "./Login";

function App() {
  return (
    // <div  style = {{fontFamily: 'Avenir'}}>
    //   <Login/>
    //   <Router> 
    //   {/* <AuthProvider> */}
    //   <switch>
    //     {/*< <Route path = "/chats component = {Chats}/>*/ }
    //     <Route path = "/" component  = {Login}/>
    //   </switch>
    //   </Router>
    // </div>
    <div>
      <Login/>
    </div>
  );
}

export default  App;

