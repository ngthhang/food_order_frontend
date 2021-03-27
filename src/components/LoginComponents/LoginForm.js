import React, { Component } from "react";
import {
    Link
} from "react-router-dom";


export default class LoginForm extends Component {
    render() {
        return (
            <div className="bg-white d-flex flex-column align-items-center justify-content-center p-5 login-form">
                <h6>FOOD ORDER</h6>
                <h4>Welcome back</h4>
                <form className="pt-4 d-flex flex-column w-100">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control input-text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control input-text" id="exampleInputPassword1" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="mt-3 btn btn-login py-2">LOGIN</button>
                </form>
                <span className='route-text pt-3'>You're not staff? Go back to <Link to='/welcome'>main page</Link>.</span>
            </div>
    );
  }
}
