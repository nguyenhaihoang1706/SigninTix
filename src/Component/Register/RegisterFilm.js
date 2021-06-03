import React, { Component } from 'react'

export default class Registerfilm extends Component {
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
                  <div className="pom-agile">
                    <input
                      placeholder="Re-Password"
                      name="Re-Password"
                      className="pass"
                      type="password"
                      required
                    />
                    <span className="icon2">
                      <i className="fa fa-unlock" aria-hidden="true" />
                    </span>
                  </div>
                </form>
                <input type="submit" defaultValue="Login" />
              </div>
            </div>
          </div>
        );
    }
}
