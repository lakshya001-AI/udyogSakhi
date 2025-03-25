import React, { useState } from 'react';
import axios from "axios";
import Style from '../App.module.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainPage() {
  return <>
  <div className={Style.mainPage}>
    <div className={Style.websiteMainPage}>
            {/*  navbar*/}
            <div className={Style.navBarDiv}>
                <p>UdyogSakhi</p>
                <div className={Style.navBarElement}>
                    <a href="">Home</a>
                    <a href="">Features</a>
                    <a href="">About Us</a>
                </div>
                <div className={Style.navBarBtn}>
                    <Link>My Profile</Link>
                </div>
            </div>

            {/* First Div */}
            <div className={Style.mainPageFirstDiv}>
  {/* Content Section */}
  <div className={Style.contentSection}>
    <h1>Empower Your Business</h1>
    <p>Join hands with UdyogSakhi to achieve your dreams.</p>
  </div>

  {/* Design Section */}
  <div className={Style.designSection}>
    <div className={Style.profileContainer}>
      <div className={Style.profile} style={{ backgroundImage: "url('/images/person1.jpg')" }}></div>
      <div className={Style.profile} style={{ backgroundImage: "url('/images/person2.jpg')" }}></div>
      <div className={Style.profile} style={{ backgroundImage: "url('/images/person3.jpg')" }}></div>
      <div className={Style.profile} style={{ backgroundImage: "url('/images/person4.jpg')" }}></div>
      <div className={Style.profile} style={{ backgroundImage: "url('/images/person5.jpg')" }}></div>
      <div className={Style.profile} style={{ backgroundImage: "url('/images/person6.jpg')" }}></div>
    </div>
  </div>
</div>
    </div>
  </div>
  </>
}

export default MainPage;