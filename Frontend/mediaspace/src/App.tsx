import React, {Component, ReactEventHandler, useEffect, useState} from 'react';
import {HashRouter,Route, Redirect, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Dashboard} from "./Pages/Dashboard";
import thunk from "redux-thunk";
import {auth} from "./actions";
import mediaspace from "./reducers";
import {applyMiddleware, createStore} from "redux";
import {connect, Provider} from "react-redux";

let store = createStore(mediaspace, applyMiddleware(thunk));
interface AuthProps {
    token: string|null,
    isAuthenticated: boolean,
    isLoading: boolean,
    user: []|null,
    errors: {}
}

interface AnyProps {
    loadUser: any,
    auth: AuthProps,
}
const RootContainerComponent: React.FC<AnyProps> = (props) => {
    useEffect(() => {
        props.loadUser()
    }, []);

    const PrivateRoute = ({component: ChildComponent, logged, red, ...rest}: any) => {
        const thisprops = props;
        console.log(thisprops.auth.isAuthenticated,logged,red);
        return <Route {...rest} render={props => {
            if (thisprops.auth.isAuthenticated === logged) {
                return <ChildComponent {...props} />
            } else {
               // return <Redirect to={red} />;
            }
        }} />
    }

        return (
            <HashRouter>
                <Switch>
                    <PrivateRoute path="/browse/:id?" logged={true} component={Dashboard} red="/" />
                    <PrivateRoute exact path="/" logged={false} component={Home} red="/browse" />
                    {/*<Route component={NotFound} />*/}
                </Switch>
            </HashRouter>
        );
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser());
        }
    }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

const App: React.FC = (props):any => {
    return (
        <Provider store={store}>
            <RootContainer />
        </Provider>
    );
};

export default App;
//if (window.location.pathname === "" && isloggedIn) {
//    return <Redirect to={{pathname: "/browse"}} push/>;

//}

//{(window.location.pathname === "" && isloggedIn) && <Redirect from='/' to="/browse" />}
//{(window.location.pathname === "" && !isloggedIn) && <Route path="/" render={(props) => <Home {...props} signIn={signIn}/>}/>}
//<Route path="/browse/:id?" render={() => <Dashboard/>}/>