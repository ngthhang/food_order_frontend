import React, { Component } from 'react';
import '../styles/login-screen.css';
import { LoginForm } from '../components/LoginComponents';

export default class LoginScreen extends Component {
    render() {
        return (
            <div className="login-screen">
                <LoginForm />
            </div>
        )
    }
}