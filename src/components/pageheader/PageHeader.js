import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import profile from "../../img/profile.png";
import "./PageHeader.scss";
function PageHeader() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Link to="/orderList">
        <img className="profile" src={profile} alt="profile" />
      </Link>
    </div>
  );
}

export default PageHeader;
