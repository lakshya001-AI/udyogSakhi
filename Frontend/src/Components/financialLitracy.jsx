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
              <button onClick={() => setActiveSection("Modules")}>
                Modules
              </button>
              <button onClick={() => setActiveSection("Schemes")}>
                Govt. Schemes
              </button>
              <button onClick={() => setActiveSection("Campaign")}>
                Campaign
              </button>
              <button onClick={() => setActiveSection("ContactUs")}>
                Contact Us
              </button>
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
                      Confidence in managing finances, Skills for achieving
                      financial goals, and Strategies for building long-term
                      financial security.
                    </p>
                    <p>
                      <strong>Level:</strong> Beginner ||{" "}
                      <strong>Duration:</strong>: 2-4 weeks
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
                      Confidence in managing finances, Skills for achieving
                      financial goals, and Strategies for building long-term
                      financial security.
                    </p>
                    <p>
                      <strong>Level:</strong> Beginner ||{" "}
                      <strong>Duration:</strong>: 1-2 weeks
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Start Learning</button>
                    </div>
                  </div>
                  <div className={Style.optionsForLiteracy}>
                    <img
                      src="https://mutualfund.adityabirlacapital.com/investor-education/-/media/herinitiative/sitecore-creative-add.png"
                      alt=""
                    />
                    <h3>Importance of financial literacy</h3>
                    <p>
                      <strong>Skills you'll gain: </strong>
                      Confidence in managing finances, Skills for achieving
                      financial goals, and Strategies for building long-term
                      financial security.
                    </p>
                    <p>
                      <strong>Level:</strong> Beginner ||{" "}
                      <strong>Duration:</strong>: 4-5 weeks
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Start Learning</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sections */}
          {activeSection === "Schemes" && (
            <div className={Style.FinancialLiteracyMainDiv}>
              <div className={Style.FinancialLiteracyDiv1}>
                <h1>Government Schemes</h1>
                <div className={Style.FinancialLiteracyDiv1OptionsDiv}>
                <div className={Style.optionsForLiteracy}>
                    <img
                      src="https://www.ibef.org/uploads/govtschemes/stand-up-india-intro.jpg"
                      alt=""
                    />
                    <h3>Stand-Up India Scheme</h3>
                    <p>
                      <strong>Details: </strong>
                      Provides loans ranging from Rs. 10 lakh to Rs. 1 crore to women entrepreneurs for setting up greenfield enterprises in manufacturing, services, or trading sectors.
                    </p>
                    <p>
                      <strong>Eligibility:</strong> Women entrepreneurs || <strong>Loan Tenure:</strong> 7 years
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Learn More</button>
                    </div>
                  </div>
                  <div className={Style.optionsForLiteracy}>
                    <img
                      src="https://lxme.in/wp-content/uploads/2024/04/Mahila-Udyam-Nidhi-Scheme-Eligibility-Criteria-Interset-Rate-More.jpg"
                      alt=""
                    />
                    <h3>Mahila Udyam Nidhi Scheme</h3>
                    <p>
                      <strong>Details: </strong>
                      A scheme by SIDBI aimed at assisting women in starting small-scale businesses.
                    </p>
                    <p>
                      <strong>Eligibility:</strong> Women-owned small businesses || <strong>Loan Amount:</strong> Up to Rs. 10 lakh
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Learn More</button>
                    </div>
                  </div>
                  <div className={Style.optionsForLiteracy}>
                    <img
                      src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/67947a0a60425.webp"
                      alt=""
                    />
                    <h3>Udyogini Scheme</h3>
                    <p>
                      <strong>Details: </strong>
                      Provides financial support to women entrepreneurs in rural and semi-urban areas to start or expand their businesses.
                    </p>
                    <p>
                      <strong>Eligibility:</strong> Women entrepreneurs || <strong>Loan Amount:</strong> Rs.3 lakh
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

{activeSection === "Campaign" && (
            <div className={Style.FinancialLiteracyMainDiv}>
              <div className={Style.FinancialLiteracyDiv1}>
                <h1>Upcoming Campaigns in Different Cities</h1>
                <div className={Style.FinancialLiteracyDiv1OptionsDiv}>
                  <div className={Style.optionsForCampaign}>
                    <h3>Financial Literacy Drive</h3>
                    <p>
                      <strong>Details: </strong>
                      Empowering individuals with financial skills to achieve their goals and secure their future.
                    </p>
                    <p>
                      <strong>Date:</strong> 15th April 2024 || <strong>Duration:</strong> 2 days || <strong>Place:</strong> Nagpur(Maharastra)
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Join Campaign</button>
                    </div>
                  </div>
                  <div className={Style.optionsForCampaign}>
                    <h3>Women Entrepreneurs Workshop</h3>
                    <p>
                      <strong>Details: </strong>
                      A workshop focusing on financial planning and resources for women entrepreneurs.
                    </p>
                    <p>
                      <strong>Date:</strong> 20th April 2024 || <strong>Duration:</strong> 1 day || <strong>Place:</strong> Bhopal(Madhya Pradesh)
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Join Campaign</button>
                    </div>
                  </div>
                  <div className={Style.optionsForCampaign}>
                    <h3>Startup Mentorship Program</h3>
                    <p>
                      <strong>Details: </strong>
                      Learn from industry leaders about managing finances and growing your startup.
                    </p>
                    <p>
                      <strong>Date:</strong> 25th April 2024 || <strong>Duration:</strong> 3 days || <strong>Place:</strong> Indore(Madhya Pradesh)
                    </p>
                    <div className={Style.startLearningBtn}>
                      <button>Join Campaign</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


{activeSection === "ContactUs" && (
            <div className={Style.FinancialLiteracyMainDiv}>
              <div className={Style.FinancialLiteracyDiv1}>
                <h1>Contact Us</h1>
                <div className={Style.inputFieldsDiv}>
                  {/* Input for name */}
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={Style.inputField}
                  />
                  {/* Input for email */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={Style.inputField}
                  />
                  {/* Input for mobile number */}
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className={Style.inputField}
                  />
                </div>
                <div className={Style.textAreaDiv}>
                  {/* textArea */}
                  <textarea
                    placeholder="Enter your message"
                    rows="5"
                    className={Style.textArea}
                  ></textarea>
                </div>
                <div className={Style.submitBtnDiv}>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default FinancialLiteracy;
