import {applyMiddleware, createStore, combineReducers } from 'redux';
import { NguoiDungReduces } from './Reducer/NguoiDungReduces';
import { DangKyReducer } from './Reducer/DangKyReducer';
import { DatVeReducer } from './Reducer/DatVeReducer';
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  NguoiDungReduces,
  DangKyReducer,
  DatVeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
