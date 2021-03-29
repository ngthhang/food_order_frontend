import React, { Component } from "react";
import {
    Link, Redirect
} from "react-router-dom";
import axios from 'axios';
import {Input, message, Button} from "antd";


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    onChangeEmail = (e) => {
        let email = e.target.value
        this.setState({
            email
        })
    }

    onChangePassword = (e) => {
        let password = e.target.value
        this.setState({
            password
        })
    }

    handleLogin = () => {
        const {email, password} =this.state;
        var isValidEmail = false;
        var isValidPassword = false;
        
        if(email === '' || email === null){
            message.error("Vui lòng nhập email")
        }else if (!email.includes('@gmail.com')) {
            message.error("Email đăng nhập không hợp lệ")
        } else{
            isValidEmail = true
        }

        if (password === '' || password === null) {
            message.error("Vui lòng nhập mật khẩu")
        } else if (password.length < 6) {
            message.error("Mật khẩu tối thiểu 6 ký tự")
        } else {
            isValidPassword = true
        }

        if(isValidPassword && isValidEmail){
            axios.post("http://localhost:8000/login", {
                email,
                password,
            })
            .then((response) => {
                console.log(response);
                message.success("Đăng nhập thành công");
            })
            .catch((error) => {
                console.log(error);
                message.error("Đăng nhập thất bại");
            });
        }
    }

    render() {
        return (
            <div className="bg-white d-flex flex-column align-items-center justify-content-center p-5 login-form">
                <h6>FOOD ORDER</h6>
                <h4>Welcome back</h4>
                <form className="pt-4 d-flex flex-column w-100">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <Input placeholder="Nhập email của bạn" className="form-control input-text" onChange={this.onChangeEmail}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <Input placeholder="Nhập mật khẩu" className="form-control input-text" type='password' onChange={this.onChangePassword}/>
                    </div>
                    <Button type="primary" size="large" onClick={this.handleLogin}>Đăng nhập</Button>
                </form>
                <span className='route-text pt-3'>You're not staff? Go back to <Link to='/'>main page</Link>.</span>
            </div>
    );
  }
}
