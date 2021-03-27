import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen, WelcomeScreen, MainScreen } from '../screens';

export default class AppRouter extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/table/:table" render={(props) => <MainScreen {...props} />} />
                    <Route path="/welcome">
                        <WelcomeScreen />
                    </Route>
                    <Route path="/login">
                        <LoginScreen />
                    </Route>
                </Switch>
            </Router >
        );
    }
}