import React, { Component } from 'react'
import Slider from "react-slick";
import './SlickCarousel.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import latMat from '../../assets/img/contentFilm/lat-mat-48h-16176188609123_215x318.png';
import thienThan from "../../assets/img/contentFilm/thien-than-ho-menh-16157907251398_215x318.jpeg";
import trangTi from "../../assets/img/contentFilm/trang-ti-16194120693380_215x318.jpeg";
import dietQuy from "../../assets/img/phim/ban-tay-diet-quy-evil-expeller-16177781815781.png";

export default class SlickCarousel extends Component {
  render() {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "140px",
      slidesToShow: 1.5,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
    };

    return (
      <div id='slickCarousel'>
        <Slider {...settings}>
          <div>
            <img src={latMat} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={thienThan} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={trangTi} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={dietQuy} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={latMat} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={thienThan} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={trangTi} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={dietQuy} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={latMat} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={thienThan} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={trangTi} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={dietQuy} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={latMat} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={thienThan} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={trangTi} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
          <div>
            <img src={dietQuy} />
            <div className="info">
              <p className="nameFilm">
                <span>P</span>Trạng Tí Phiêu Lưu Ký
              </p>
              <span className="timeFilm">100p</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
