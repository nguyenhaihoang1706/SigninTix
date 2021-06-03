import React, { Component } from 'react'
import './HomeApp.css';
import Slider from "react-slick";

import Img from '../../assets/img/HomeApp/backapp.jpeg';
import mobile from '../../assets/img/HomeApp/mobile.png'
import slide1 from '../../assets/img/HomeApp/slide1.jpeg';
import slide2 from "../../assets/img/HomeApp/slide15.jpeg";
import slide3 from "../../assets/img/HomeApp/slide16.jpeg";
import slide4 from "../../assets/img/HomeApp/slide2.jpeg";
import slide5 from "../../assets/img/HomeApp/slide8.jpeg";


export default class HomeApp extends Component {



  render() {
      
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
        return (
          <div className="row" id="wraphomeApp">
            <div id="homeApp" style={{ background: "url(" + Img + ")" }}>
              <div className="mainMaxWidth">
                <div className="row">
                  <div
                    className="col-md-6 text-left"
                    style={{ fontWeight: 300 }}
                  >
                    <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                    <p className="textLeft">người yêu điện ảnh</p>
                    <br />
                    <p className="textSmallLeft">
                      Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                      rạp và đổi quà hấp dẫn.
                    </p>
                    <br />
                    <button class="buttonLeft">
                      App miễn phí - Tải về ngay!
                    </button>
                    <p class="textAppUnder">
                      TIX có hai phiên bản
                      <a
                        class="tagA"
                        target="_blank"
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                      >
                        iOS
                      </a>
                      &
                      <a
                        class="tagA"
                        target="_blank"
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                      >
                        Android
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 right">
                    <img className="img-responsive img-phone" src={mobile} />
                    <div id="sliderScreen">
                      <div>
                        <Slider {...settings}>
                          <div>
                            <img src={slide1} />
                          </div>
                          <div>
                            <img src={slide1} />
                          </div>
                          <div>
                            <img src={slide1} />
                          </div>
                          <div>
                            <img src={slide1} />
                          </div>
                          <div>
                            <h3>5</h3>
                          </div>
                          <div>
                            <h3>6</h3>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


