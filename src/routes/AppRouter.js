import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen, WelcomeScreen, MainScreen, OrderScreen, StaffScreen } from '../screens';

export default class AppRouter extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/table/:table" render={(props) => <MainScreen {...props} />} />
                    <Route exact path="/">
                        <WelcomeScreen />
                    </Route>
                    <Route exact path="/login">
                        <LoginScreen />
                    </Route>
                    <Route exact path="/order/table/:table" render={(props) => <OrderScreen {...props} />} />
                    <Route exact path="/staff/:id" render={(props) => <StaffScreen {...props} />} />
                    
                </Switch>
            </Router >
        );
    }
}