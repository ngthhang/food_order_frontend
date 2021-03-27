import React, { Component } from "react";
import {Link} from 'react-router-dom';


export default class MainHeader extends Component {
  render() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center pt-3">
            <Link to='/welcome'>
              <h3>FOOD ORDER</h3>
            </Link>
            <h4>What you like?</h4>
        </div>
    );
  }
}
