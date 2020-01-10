import React, {Component, ReactEventHandler, useState} from 'react';
import {HashRouter,Route, Redirect} from 'react-router-dom';

import {Home} from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {readCookie} from "./Api/MediaAPIClient";
import {Dashboard} from "./Pages/Dashboard";

const App: React.FC = (props):any => {
    const [isloggedIn, setLoggedIn] = useState(false);
    const signIn = (e: boolean) => {
        setLoggedIn(true);
    };


    //if (window.location.pathname === "" && isloggedIn) {
    //    return <Redirect to={{pathname: "/browse"}} push/>;

    //}

    //{(window.location.pathname === "" && isloggedIn) && <Redirect from='/' to="/browse" />}
    //{(window.location.pathname === "" && !isloggedIn) && <Route path="/" render={(props) => <Home {...props} signIn={signIn}/>}/>}
    //<Route path="/browse/:id?" render={() => <Dashboard/>}/>
    console.log(isloggedIn,"root");
    return (
        <HashRouter>
            <Route path="/" render={(props) => <Home {...props} signIn={signIn} loggedIn={isloggedIn}/>}/>
            <Route path="/browse/:id?" render={() => <Dashboard loggedIn={isloggedIn}/>}/>
        </HashRouter>
    );

}

export default App;
