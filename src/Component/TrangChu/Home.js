import React, { Component } from "react";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import HomeTool from "../HomeTool/HomeTool";
import FilmBlock from "../FilmBlock/FilmBlock";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <HomeTool />
        <div className='container'>
          <FilmBlock />
        </div>
        
      </div>
    );
  }
}
