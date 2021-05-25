import React, { Component } from "react";
import SlickCarousel from "../Slick-Carousel/SlickCarousel";
import "./FilmBlock.css";


export default class FilmBlock extends Component {
  render() {
    return (
      <div className="col-xs-12 block mainMaxWidth" id="homeMovies">
        <ul className="nav nav-tabs navCenter">
          <li style={{ marginRight: 5 }} className="active">
            <a
              data-toggle="tab"
              data-target="#nowShowingFilms"
              aria-expanded="true"
            >
              Đang Chiếu
            </a>
            {/* Tet */}
            <div className="wing wingLeft" />
            <div className="wing wingRight" />
          </li>
          <li style={{ marginLeft: 5 }}>
            <a data-toggle="tab" data-target="#upComingFilms">
              Sắp Chiếu
            </a>
            <div className="wing wingLeft" />
            <div className="wing wingRight" />
          </li>
        </ul>
        <div className="tab-content">
          <div>
            <SlickCarousel />
          </div>
        </div>
      </div>
    );
  }
}
