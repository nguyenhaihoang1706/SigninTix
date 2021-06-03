import React, { Component } from 'react';
import './LoginFilm.css';
import './font-awesome-Login.css';
import {NavLink} from 'react-router-dom'

export default class LoginFilm extends Component {
    render() {
        return (
          <div className="center-container">
            <div className="main-content-agile">
              <div className="sub-main-w3">
                <form action="#" method="post">
                  <div className="pom-agile">
                    <input
                      placeholder="Username"
                      name="Name"
                      className="user"
                      type="text"
                      required
                    />
                    <span className="icon1">
                      <i className="fa fa-user" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="pom-agile">
                    <input
                      placeholder="Password"
                      name="Password"
                      className="pass"
                      type="password"
                      required
                    />
                    <span className="icon2">
                      <i className="fa fa-unlock" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="sub-w3l">
                    <h6 className="register">
                      <NavLink to="/register">Register</NavLink>
                    </h6>
                    <h6 className="forgotpass">
                      <a href="#">Forgot Password?</a>
                    </h6>
                  </div>
                </form>
                <input type="submit" defaultValue="Login" />
              </div>
            </div>
          </div>
        );
    }
}
