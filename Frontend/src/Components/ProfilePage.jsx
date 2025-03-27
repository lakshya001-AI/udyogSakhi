import React, { useState } from "react";
import Style from "../App.module.css";
import { Link , useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfilePage() {

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem("authToken");
        navigate("/");
      };


  let getUser = JSON.parse(localStorage.getItem("User"));
  console.log(getUser);
  


  return (
    <>
      <div className={Style.mainPage}>
        <div className={Style.websiteMainPage}>
          {/* Navbar */}
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

          <div className={Style.profilePageMainDiv}>

            <div className={Style.profilePageMainInnerDiv}>

              <div className={Style.profilePageMainInnerDiv1}>
                <div className={Style.profilePageMainInnerDiv11}></div>
                <div className={Style.profilePageMainInnerDiv12}>
                <button onClick={logoutUser}>logout</button>
                </div>
              </div>

              <div className={Style.profilePageMainInnerDiv2}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
