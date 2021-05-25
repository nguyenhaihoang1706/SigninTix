import React, { Component } from 'react'
import dietQuy from '../../assets/img/phim/ban-tay-diet-quy-evil-expeller-16177781815781.png';
import latMat from '../../assets/img/phim/lat-mat-48h-16176188609123_215x318.png';
import trangTi from '../../assets/img/phim/trang-ti-16194120693380_215x318.jpeg';
import './Carousel.css';

export default class Carousel extends Component {
    render() {
        return (
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                style={{ borderRadius: "50%", height: 10, width: 10 }}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                style={{ borderRadius: "50%", height: 10, width: 10 }}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                style={{ borderRadius: "50%", height: 10, width: 10 }}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={dietQuy} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={latMat} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={trangTi} className="d-block w-100" style={{height:582}} alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );
    }
}
