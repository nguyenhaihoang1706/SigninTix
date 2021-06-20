import React from "react";
import './DatVe.css';
import hinhNen from '../../assets/img/Login/bg2.jpeg';
import DanhSachGhe from "../DanhSachGhe/DanhSachGhe";
import ThongTinDatVe from '../ThongTinDatVe/ThongTinDatVe';

export default function DatVe() {
  return (
    <div
      style={{ backgroundImage: "url(" + hinhNen + ")" }}
      className="backroundImg"
    >
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-8">
          <DanhSachGhe />
        </div>
        <div className="col-4" style={{ marginTop: 70 }}>
          <ThongTinDatVe />
        </div>
      </div>
    </div>
  );
}
