import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Input, message, Button } from "antd";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      staffId: "",
    };
  }

  componentDidMount() {
    this.checkToken();
  }

  checkToken() {
    let token = localStorage.getItem("_token");
    if(token){
      this.setState({
        redirect: true
      })
    }
  }

  onChangeEmail = (e) => {
    let email = e.target.value;
    this.setState({
      email,
    });
  };

  onChangePassword = (e) => {
    let password = e.target.value;
    this.setState({
      password,
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    var isValidEmail = false;
    var isValidPassword = false;

    if (email === "" || email === null) {
      message.error("Vui lòng nhập email");
    } else if (!email.includes("@gmail.com")) {
      message.error("Email đăng nhập không hợp lệ");
    } else {
      isValidEmail = true;
    }

    if (password === "" || password === null) {
      message.error("Vui lòng nhập mật khẩu");
    } else if (password.length < 6) {
      message.error("Mật khẩu tối thiểu 6 ký tự");
    } else {
      isValidPassword = true;
    }

    if (isValidPassword && isValidEmail) {
      axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem("_token", response.data.token);
          message.success("Đăng nhập thành công");
          this.setState({
            redirect: true,
          });
        })
        .catch((error) => {
          message.error(error?.response?.data?.message || "Đăng nhập thất bại");
        });
    }
  };

  render() {
    const {  redirect } = this.state;
    return (
      <>
        {redirect ? (
          <Redirect push to='/staff' />
        ) : (
          <div className="bg-white d-flex flex-column align-items-center justify-content-center p-5 login-form">
            <h6>FOOD ORDER</h6>
            <h4>Welcome back</h4>
            <form className="pt-4 d-flex flex-column w-100">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <Input
                  placeholder="Nhập email của bạn"
                  className="form-control input-text"
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <Input
                  placeholder="Nhập mật khẩu"
                  className="form-control input-text"
                  type="password"
                  onChange={this.onChangePassword}
                />
              </div>
              <Button type="primary" size="large" onClick={this.handleLogin}>
                Đăng nhập
              </Button>
            </form>
            <span className="route-text pt-3">
              You're not staff? Go back to <Link to="/">main page</Link>.
            </span>
          </div>
        )}
      </>
    );
  }
}
