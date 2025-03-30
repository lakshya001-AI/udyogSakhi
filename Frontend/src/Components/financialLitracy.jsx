import React, { useState } from "react";
import Style from "../App.module.css";
import { Link } from "react-router-dom";

function FinancialLiteracy() {
  const [activeSection, setActiveSection] = useState("Modules"); // Default to "Modules"

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

          {/* Options Section */}
          <div className={Style.optionsSectionDiv}>
            <div className={Style.optionsSectionDivInnerDiv}>
              <button onClick={() => setActiveSection("Modules")}>Modules</button>
              <button onClick={() => setActiveSection("Campaign")}>Campaign</button>
              <button onClick={() => setActiveSection("ContactUs")}>Contact Us</button>
            </div>
          </div>

          {/* Sections */}
          {activeSection === "Modules" && (

            <div className={Style.FinancialLiteracyMainDiv}>

<div className={Style.FinancialLiteracyDiv1}>
              <h1>Learning Modules</h1>
              <div className={Style.FinancialLiteracyDiv1OptionsDiv}>
                <div className={Style.optionsForLiteracy}>
                  <img
                    src="https://smartinvesting.ala.org/wp-content/uploads/2020/01/PPO_socialmedia.jpg"
                    alt=""
                  />
                  <h3>Basic Financial Literacy</h3>
                  <p>
                    <strong>Skills you'll gain: </strong>
                    Confidence in managing finances, Skills for achieving financial goals, and Strategies for
                    building long-term financial security.
                  </p>
                  <p>
                    <strong>Level:</strong> Beginner || <strong>Duration:</strong>: 2-4 weeks
                  </p>
                  <div className={Style.startLearningBtn}>
                    <button>Start Learning</button>
                  </div>
                </div>
                <div className={Style.optionsForLiteracy}>
                  <img
                    src="https://lxme.in/wp-content/uploads/2024/03/Feb-blog-images-17.jpg"
                    alt=""
                  />
                  <h3>Intro to Personal Finance</h3>
                  <p>
                    <strong>Skills you'll gain: </strong>
                    Confidence in managing finances, Skills for achieving financial goals, and Strategies for
                    building long-term financial security.
                  </p>
                  <p>
                    <strong>Level:</strong> Beginner || <strong>Duration:</strong>: 1-2 weeks
                  </p>
                  <div className={Style.startLearningBtn}>
                    <button>Start Learning</button>
                  </div>
                </div>
              </div>
            </div>

            </div>
          )}

          {activeSection === "Campaign" && (
            <div className={Style.FinancialLiteracyDiv1}>
              <h1>Upcoming Campaigns</h1>
              <div className={Style.FinancialLiteracyDiv1OptionsDiv}>
                <div className={Style.optionsForLiteracy}>
                  <img
                    src="https://smartinvesting.ala.org/wp-content/uploads/2020/01/PPO_socialmedia.jpg"
                    alt=""
                  />
                  <h3>Basic Financial Literacy Campaign</h3>
                  <p>
                    <strong>Skills you'll gain: </strong>
                    Confidence in managing finances, Skills for achieving financial goals, and Strategies for
                    building long-term financial security.
                  </p>
                  <p>
                    <strong>Level:</strong> Beginner || <strong>Duration:</strong>: 2-4 weeks
                  </p>
                  <div className={Style.startLearningBtn}>
                    <button>Join Campaign</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "ContactUs" && (
            <div className={Style.FinancialLiteracyDiv1}>
              <h1>Contact Us</h1>
              <p>For any inquiries, reach out to us at contact@udyogsakhi.com.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FinancialLiteracy;
