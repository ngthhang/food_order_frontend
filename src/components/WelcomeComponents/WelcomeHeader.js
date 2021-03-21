import React, { Component } from "react";

export default class WelcomeHeader extends Component {
  render() {
    return (
      <div className="px-4 pt-2 d-flex flex-row align-items-center justify-content-between">
          <h1>FOOD ORDER</h1>
          <div className="d-flex flex-row align-items-center justify-content-around">
            <button type="button" class="btn btn-text mr-4 px-4">LOGIN</button>
            <button type="button" class="btn btn-text">HELP</button>
          </div>
      </div>
    );
  }
}
