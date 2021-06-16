import React, { Component } from "react";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import HomeTool from "../HomeTool/HomeTool";
import FilmBlock from "../FilmBlock/FilmBlock";
import Login from "../../Pages/Login/Login";
import Footer from "../../Pages/Footer/Footer";
import HomeApp from "../../Pages/HomeApp/HomeApp";
import Register from "../../Pages/Register/Register";
import DatVe from "../DatVe/DatVe";



export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Carousel />
        <HomeTool /> 
        <div className='container'>
          <FilmBlock />
        </div>

        <Footer/>

        <HomeApp/> 
        <Login/> */}
        {/* <Register/> */}
        <DatVe/>
       </div>
    );
  }
}
