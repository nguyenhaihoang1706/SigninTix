import React, { Component } from 'react'
import './HomeTool.css';

export default class HomeTool extends Component {
  render() {
    return (
      <div id="homeTools" className="hideOnMobile">
        <div
          className="w30p widthByPercent dropdown selectFilm"
          id="selectMoive"
        >
          <div className="dropdown-toggle selectMenu" data-toggle="dropdown">
            Phim
          </div>
          <ul className="dropdown-menu selectScroll"></ul>
        </div>
        <div className="smallBlock widthByPercent dropdown selectCinema">
          <div
            className="dropdown-toggle selectMenu white ng-binding"
            data-toggle="dropdown"
          >
            Rạp
          </div>
        </div>
        <div className="smallBlock widthByPercent dropdown selectDate">
          <div
            className="dropdown-toggle selectMenu white ng-binding"
            data-toggle="dropdown"
          >
            Ngày xem
          </div>
        </div>
        <div className="smallBlock widthByPercent dropdown selectSession">
          <div
            className="dropdown-toggle selectMenu white ng-binding"
            data-toggle="dropdown"
          >
            Suất chiếu
          </div>
        </div>
        <div className="smallBlock widthByPercent">
          <div className="after-btn" />
          <div className="before-btn" />
          <button id="btnBuy" type="button" className="btn btn-primary">
            MUA VÉ NGAY
          </button>
        </div>
      </div>
    );
  }
}
