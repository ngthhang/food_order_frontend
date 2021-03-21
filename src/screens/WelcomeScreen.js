import React, { Component } from 'react';
import {  WelcomeHeader, WelcomeContent } from '../components/WelcomeComponents';
import '../styles/welcome-screen.css';

export default class WelcomeScreen extends Component {
    render(){
        return (
            <div className="welcome-bg">
                <WelcomeHeader />
                <WelcomeContent />
            </div>
        )
    }
}