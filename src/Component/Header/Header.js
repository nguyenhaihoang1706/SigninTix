import React, { Component } from "react";
import { Button } from "react-bootstrap";
import img from "../../assets/img/web-logo.png";
import imgLogin from "../../assets/img/avatar.png";
import imgLocation from "../../assets/img/location-header.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav
            id="navbar_top"
            className="navbar navbar-expand-lg navbar-light bg-light justify-content-start"
          >
            <div className="container-fluid" style={{ height: 50 }}>
              <a className="navbar-brand" href="#">
                <img className="logo" src={img} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-around"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav center">
                  <a className="nav-link active" aria-current="page" href="#">
                    Lịch chiếu
                  </a>
                  <a className="nav-link" href="#">
                    Cụm rạp
                  </a>
                  <a className="nav-link" href="#">
                    Tin tức
                  </a>
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Ứng dụng
                  </a>
                </div>
                <div className="navbar-nav right ">
                  <div className="account">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      <img
                        className="rounded-circle"
                        style={{ height: 30, width: 30 }}
                        src={imgLogin}
                      />
                      <p style={{ display: "inline-block", marginLeft: 10 }}>
                        Đăng nhập
                      </p>
                    </NavLink>
                  </div>
                  <div
                    id="dropdownMenuLink"
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                    className="selectLocation dropdown"
                  >
                    <i class="fa fa-map-marker-alt"></i>
                    <div
                      style={{ marginLeft: "10px" }}
                      className="dropdown-toggle selectMenu white ng-binding"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Hồ Chí Minh
                    </div>
                    <ul
                      aria-labelledby="dropdownMenuLink"
                      className="dropdown-menu selectScroll"
                    >
                      {/* ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hồ Chí Minh"
                          data-locid={0}
                          className="ng-binding dropdown-item"
                        >
                          Hồ Chí Minh
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hà Nội"
                          data-locid={1}
                          className="ng-binding"
                        >
                          Hà Nội
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Đà Nẵng"
                          data-locid={2}
                          className="ng-binding"
                        >
                          Đà Nẵng
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hải Phòng"
                          data-locid={3}
                          className="ng-binding"
                        >
                          Hải Phòng
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Biên Hoà"
                          data-locid={4}
                          className="ng-binding"
                        >
                          Biên Hoà
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Nha Trang"
                          data-locid={5}
                          className="ng-binding"
                        >
                          Nha Trang
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Bình Dương"
                          data-locid={6}
                          className="ng-binding"
                        >
                          Bình Dương
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Phan Thiết"
                          data-locid={7}
                          className="ng-binding"
                        >
                          Phan Thiết
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hạ Long"
                          data-locid={8}
                          className="ng-binding"
                        >
                          Hạ Long
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Cần Thơ"
                          data-locid={9}
                          className="ng-binding"
                        >
                          Cần Thơ
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Vũng Tàu"
                          data-locid={10}
                          className="ng-binding"
                        >
                          Vũng Tàu
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Quy Nhơn"
                          data-locid={11}
                          className="ng-binding"
                        >
                          Quy Nhơn
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Huế"
                          data-locid={12}
                          className="ng-binding"
                        >
                          Huế
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Long Xuyên"
                          data-locid={13}
                          className="ng-binding"
                        >
                          Long Xuyên
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Thái Nguyên"
                          data-locid={14}
                          className="ng-binding"
                        >
                          Thái Nguyên
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Buôn Ma Thuột"
                          data-locid={15}
                          className="ng-binding"
                        >
                          Buôn Ma Thuột
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Bắc Giang"
                          data-locid={16}
                          className="ng-binding"
                        >
                          Bắc Giang
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Bến Tre"
                          data-locid={17}
                          className="ng-binding"
                        >
                          Bến Tre
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Việt Trì"
                          data-locid={18}
                          className="ng-binding"
                        >
                          Việt Trì
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Ninh Bình"
                          data-locid={19}
                          className="ng-binding"
                        >
                          Ninh Bình
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Thái Bình"
                          data-locid={20}
                          className="ng-binding"
                        >
                          Thái Bình
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Vinh"
                          data-locid={21}
                          className="ng-binding"
                        >
                          Vinh
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Bảo Lộc"
                          data-locid={22}
                          className="ng-binding"
                        >
                          Bảo Lộc
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Đà Lạt"
                          data-locid={23}
                          className="ng-binding"
                        >
                          Đà Lạt
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Trà Vinh"
                          data-locid={24}
                          className="ng-binding"
                        >
                          Trà Vinh
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Yên Bái"
                          data-locid={25}
                          className="ng-binding"
                        >
                          Yên Bái
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Kiên Giang"
                          data-locid={26}
                          className="ng-binding"
                        >
                          Kiên Giang
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Vĩnh Long"
                          data-locid={27}
                          className="ng-binding"
                        >
                          Vĩnh Long
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Cà Mau"
                          data-locid={28}
                          className="ng-binding"
                        >
                          Cà Mau
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hậu Giang"
                          data-locid={29}
                          className="ng-binding"
                        >
                          Hậu Giang
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Tây Ninh"
                          data-locid={30}
                          className="ng-binding"
                        >
                          Tây Ninh
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Tuyên Quang"
                          data-locid={31}
                          className="ng-binding"
                        >
                          Tuyên Quang
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Thanh Hóa"
                          data-locid={32}
                          className="ng-binding"
                        >
                          Thanh Hóa
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Nam Định"
                          data-locid={33}
                          className="ng-binding"
                        >
                          Nam Định
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hải Dương"
                          data-locid={34}
                          className="ng-binding"
                        >
                          Hải Dương
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Gia Lai"
                          data-locid={35}
                          className="ng-binding"
                        >
                          Gia Lai
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hà Tĩnh"
                          data-locid={36}
                          className="ng-binding"
                        >
                          Hà Tĩnh
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Phú Yên"
                          data-locid={37}
                          className="ng-binding"
                        >
                          Phú Yên
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Bạc Liêu"
                          data-locid={38}
                          className="ng-binding"
                        >
                          Bạc Liêu
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Long An"
                          data-locid={39}
                          className="ng-binding"
                        >
                          Long An
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Đồng Hới"
                          data-locid={40}
                          className="ng-binding"
                        >
                          Đồng Hới
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hà Nam"
                          data-locid={41}
                          className="ng-binding"
                        >
                          Hà Nam
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Bắc Ninh"
                          data-locid={42}
                          className="ng-binding"
                        >
                          Bắc Ninh
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Quảng Trị"
                          data-locid={43}
                          className="ng-binding"
                        >
                          Quảng Trị
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Kon Tum"
                          data-locid={44}
                          className="ng-binding"
                        >
                          Kon Tum
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Sóc Trăng"
                          data-locid={45}
                          className="ng-binding"
                        >
                          Sóc Trăng
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Sơn La"
                          data-locid={46}
                          className="ng-binding"
                        >
                          Sơn La
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Lạng Sơn"
                          data-locid={47}
                          className="ng-binding"
                        >
                          Lạng Sơn
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Quảng Ngãi"
                          data-locid={48}
                          className="ng-binding"
                        >
                          Quảng Ngãi
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Mỹ Tho"
                          data-locid={49}
                          className="ng-binding"
                        >
                          Mỹ Tho
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Đồng Tháp"
                          data-locid={50}
                          className="ng-binding"
                        >
                          Đồng Tháp
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                      <li
                        ng-repeat="(locId, location) in listLocations"
                        className="ng-scope"
                      >
                        <a
                          ng-click="selectLocation(locId)"
                          data-name="Hưng Yên"
                          data-locid={51}
                          className="ng-binding"
                        >
                          Hưng Yên
                        </a>
                      </li>
                      {/* end ngRepeat: (locId, location) in listLocations */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
