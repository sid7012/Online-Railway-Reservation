import React, { useEffect, useState } from "react";
import "./Header.css";
import Swal from "sweetalert2";

function Header() {
  const [openLinks] = useState(false);

  const onLogOutClick = () => {
    window.sessionStorage.clear();
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <h1 style={{ color: "white", fontFamily: "cursive" }}>
          Online Railway Reservation
        </h1>
        <div className="hiddenLinks">
          <a href="/"> Home </a>
          <a href="/menu"> Menu </a>
          <a href="/about"> About </a>
          <a href="/contact"> Contact </a>
          <a href="/signin"> Admin </a>
          <a href="/signin"> User </a>
        </div>
      </div>
      <div className="rightSide">
        <a href="/home"> Home </a>
        {sessionStorage.loginStatus === 1 ? (
          <a href="/adminfunctinality"> Dashboard </a>
        ) : sessionStorage.loginStatus === 2 ? (
          <a href="/userfunctinality"> Dashboard </a>
        ) : (
          ""
        )}
        <a href="/signin"> User Login </a>
        <a href="/signin"> Admin Login </a>
        {sessionStorage.loginStatus === 1 ? (
          <a onClick={onLogOutClick} href="/signin">
            {" "}
            LogOut{" "}
          </a>
        ) : sessionStorage.loginStatus === 2 ? (
          <a onClick={onLogOutClick}  href="/signin"> LogOut </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
