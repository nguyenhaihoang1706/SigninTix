import React, { Component } from "react";
import "./Login.css";

import backgroundImg from "../../assets/img/Login/bg2.jpeg";
import logoHeader from "../../assets/img//Login/signHeader.png";

import logoZalo from '../../assets/img/Login/btn-Zalo.png';
import logoFB from '../../assets/img/Login/btn-FB.png';
import logoGG from '../../assets/img/Login/btn-Google.png';

export default class Login extends Component {
  mangLogo = [logoZalo, logoFB, logoGG];

  rendermangLogo() {
    return this.mangLogo.map((logo) => {
          return (
            <div style={{ paddingBottom: 20,cursor: 'pointer' }} className="zl-signin col-xs-12">
              <a>
                <img src={logo} />
              </a>
            </div>
          );
    })
      
  }

  render() {
    return (
      <div className="container-fluid" id="mainLogin">
        <div
          style={{
            backgroundImage: "url(" + backgroundImg + ")",
          }}
          className="signin"
        >
          <div className="signin--wrapper">
            <img className="sign-header" src={logoHeader} />
            <div style={{ paddingBottom: 20 }} className="signin--message">
              Đăng nhập để được nhiều ưu đãi, mua vé
              <br />
              và bảo mật thông tin!
            </div>
            <div>{this.rendermangLogo()}</div>
            <div className="signin-close"></div>
          </div>
        </div>
      </div>
    );
  }
}
