
import './App.css';
import React from 'react';

import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import { AuthProvider } from './AuthContext';

import Login from "./Login";
import Chats from './Chats';

function App() {
  return (
    <div  style = {{fontFamily: 'Avenir'}}>
      <Login/>
      <Router> 
      <AuthProvider/>
      <switch>
        <Route path = "/Chats" component = {Chats}/>
        <Route path = "/" component  = {Login}/>
      </switch>
      </Router>
    </div>
    
  );
}

export default  App;

