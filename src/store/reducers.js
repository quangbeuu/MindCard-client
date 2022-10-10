import { combineReducers } from "@reduxjs/toolkit";
import alertSlice from "./alert/alertSlice";
import authSlice from "./auth/slice";
import classSlice from "./class/slice";

export const reducer = combineReducers({
  auth: authSlice,
  class: classSlice,
  alert: alertSlice,
});
