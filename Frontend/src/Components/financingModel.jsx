import React, { useState } from "react";
import Style from "../App.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FinancingModel() {
  return (
    <>
      <div className={Style.mainPage}>
        <div className={Style.websiteMainPage}>
          {/*  navbar*/}
          <div className={Style.navBarDiv}>
            <p>UdyogSakhi</p>
            <div className={Style.navBarElement}>
              <Link to="/MainPage">Home</Link>
              <a href="#features">Features</a>
              <a href="#AboutUs">About Us</a>
              <Link>MarketPlace</Link>
            </div>
            <div className={Style.navBarBtn}>
              <Link to="/ProfilePage">My Profile</Link>
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
}

export default FinancingModel;
