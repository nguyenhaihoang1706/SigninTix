import {applyMiddleware, createStore, combineReducers } from 'redux';
import { NguoiDungReduces } from './Reducer/NguoiDungReduces';
import {DangKyReducer} from './Reducer/DangKyReducer';
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  NguoiDungReduces,
  DangKyReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
