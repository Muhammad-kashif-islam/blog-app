import React from "react";
import authServie from "../appwirte/auth";
import { logout } from "../store/authSliceStore";
import { useDispatch } from "react-redux";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authServie
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      LogoutBtn
    </div>
  );
}

export default LogoutBtn;
