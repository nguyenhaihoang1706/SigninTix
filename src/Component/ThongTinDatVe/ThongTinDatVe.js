import React from 'react';
import {useSelector,useDispatch } from 'react-redux';

export default function ThongTinDatVe() {

    const {danhSachGheDangDat} = useSelector(state => state.DatVeReducer)
  const dispatch = useDispatch();
  
    const xoaGhe = (soGhe) => {
      dispatch({
        type: 'XOA_GHE',
        soGhe: soGhe
        })
    }
  
    return (
      <div className="text-white ">
        <h1 style={{ color: "#fb4226" }} className="display-4 text-center mb-5">
          Danh sách ghế đang chọn
        </h1>
        <div style={{ marginBottom: 10 }} className="text-left">
          <button className="gheDangChon m-0"></button> Ghế đang chọn
        </div>
        <div style={{ marginBottom: 10 }} className="text-left">
          <button className="ghe m-0"></button> Ghế chưa chọn
        </div>
        <div style={{ marginBottom: 30 }} className="text-left">
          <button className="gheDuocChon m-0"></button> Ghế đã chọn
        </div>

        <table className="table text-white">
          <thead>
            <tr>  
              <th className="colorTix">Số ghế</th>
              <th className="colorTix">Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <tr className="colorTix" key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td>
                    <button onClick={() => {
                        xoaGhe(gheDangDat.soGhe);
                    }} className="btn btn-danger">X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}
