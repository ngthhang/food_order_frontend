import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen, WelcomeScreen, MainScreen, OrderScreen, StaffScreen, PaymentScreen, CashierScreen } from '../screens';

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
                    <Route exact path="/payment/:table" render={(props) => <PaymentScreen {...props} />} />
                    <Route exact path="/staff">
                        <StaffScreen />
                    </Route>
                    <Route exact path="/cashier">
                        <CashierScreen />
                    </Route>
                </Switch>
            </Router >
        );
    }
}