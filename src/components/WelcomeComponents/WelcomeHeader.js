import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class WelcomeHeader extends Component {
  render() {
    return (
      <div className="px-4 pt-2 d-flex flex-row align-items-center justify-content-between">
          <h1>FOOD ORDER</h1>
          <div className="d-flex flex-row align-items-center justify-content-around">
            <Link to="/login">
              <button type="button" className="btn btn-text mr-4 px-4">LOGIN</button>
            </Link>
            <button type="button" className="btn btn-text">HELP</button>
          </div>
      </div>
    );
  }
}
