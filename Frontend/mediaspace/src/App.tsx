import React, {Component, ReactEventHandler, useState} from 'react';
import {HashRouter,Route, Redirect} from 'react-router-dom';
import {Home} from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {readCookie} from "./Api/MediaAPIClient";

const App: React.FC = () => {
    const [isloggedIn, setLoggedIn] = useState(false);
    const signIn = (e: boolean) => {
        setLoggedIn(e);
    };

  return (
    <HashRouter>
        <Route path="/" render={ (props) => <Home {...props} signIn={signIn}/>}/>
       {/*<Route path="/browse/:id?" render={ (props) => <Logged {...props} />}/>*/}
    </HashRouter>
  );
}

export default App;
