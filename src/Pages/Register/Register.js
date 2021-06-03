import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './Register.css';

import backgroundImg from "../../assets/img/Login/bg2.jpeg";
import logoHeader from "../../assets/img//Login/signHeader.png";
import RegisterFilm from '../../Component/Register/RegisterFilm';

export default class Register extends Component {
  render() {
    return (
      <div className="container-fluid" id="mainLogin">
        <div
          style={{height:'100vh',width:'100vw',
            backgroundImage: "url(" + backgroundImg + ")",
          }}
          className="register"
        >
          <div className="register--wrapper">
            <img className="register-header" src={logoHeader} />
            <RegisterFilm/>
            <NavLink to="/home" className="register-close"></NavLink>
          </div>
        </div>
      </div>
    );
  }
}
