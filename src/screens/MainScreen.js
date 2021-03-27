import React, { Component } from "react";
import {
  MainHeader,
  MainCart,
  MainMenu,
} from "../components/MainHomeComponents";
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="w-100 h-100 d-flex flex-row align-items-start">
        <div className="d-flex flex-column align-items-start main-header">
          <MainHeader />
          <MainMenu />
        </div>
        <MainCart />
      </div>
    );
  }
}
