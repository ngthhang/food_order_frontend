import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginScreen, WelcomeScreen} from '../screens';

export default class AppRouter extends Component {
    render(){
        return (
            <Router>
                <Switch>
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