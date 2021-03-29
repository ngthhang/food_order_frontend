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
      isCashier: false,
      staffId: "",
    };
  }

  componentDidMount() {
    this.checkToken();
  }

  checkToken() {
    let token = localStorage.getItem("_token");
    let cashierToken = localStorage.getItem("_c_token");
    if(token){
      this.setState({
        redirect: true
      })
    }
    if(cashierToken){
      this.setState({
        redirect: true,
        isCashier: true
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
          message.success("Đăng nhập thành công");
          let cashier = false;
          if(response.data.staffPosition === 2 || response.data.staffPosition === '2'){
            cashier = true;
            localStorage.setItem("_c_token", response.data.token);
          }else{
            localStorage.setItem("_token", response.data.token);
          }
          this.setState({
            isCashier: cashier,
            redirect: true,
          });
        })
        .catch((error) => {
          message.error(error?.response?.data?.message || "Đăng nhập thất bại");
        });
    }
  };

  render() {
    const {  redirect, isCashier } = this.state;
    return (
      <>
        {redirect ? (
          <Redirect push to={isCashier ? '/cashier' : '/staff'} />
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
