import React, { useState } from "react";
import axios from "axios";
import Style from "../App.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function gotoDonations() {
    navigate("/donationPage");
  }

  function gotoMarketPlace(){
    navigate("/marketPlace");
  }


  function handleFormSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Product submitted!");
    setShowPopup(false);
  }

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
              <Link to="/marketPlace">MarketPlace</Link>
            </div>
            <div className={Style.navBarBtn}>
              <Link to="/ProfilePage">My Profile</Link>
            </div>
          </div>

          {/* First Div */}
          <div className={Style.mainPageFirstDiv}>
            {/* Content Section */}
            <div className={Style.contentSection}>
              <p className={Style.contentSectionPara1}>
                <i class="fa-solid fa-heart"></i> Empower Your Dreams with
                UdyogSakhi
              </p>
              <h1 className={Style.contentSectionHeading}>
                For the Women and Dreams That Inspire Us All.
              </h1>
              <p className={Style.contentSectionPara2}>
                Join hands with UdyogSakhi, a platform dedicated to empowering
                women entrepreneurs. Together, we can turn your dreams into
                reality by providing access to innovative financial solutions,
                AI-driven support, and tailored mentorship programs.
              </p>
              <div className={Style.joinUsNowBtn}>
                <button>
                  Join With Us{" "}
                  <i class="fa-solid fa-circle-arrow-right fa-xl"></i>
                </button>
              </div>
            </div>

            {/* Design Section */}
            <div className={Style.designSection}>
              <div className={Style.profileContainer}>
                <div
                  className={Style.profile}
                  style={{
                    backgroundImage:
                      "url('https://hihindia.org/wp-content/uploads/2020/05/SELVI-1-scaled.jpg')",
                  }}
                ></div>
                <div
                  className={Style.profile}
                  style={{
                    backgroundImage:
                      "url('https://images.yourstory.com/cs/4/8e7cc4102d6c11e9aa979329348d4c3e/shutterstock1929551069-1664529971155.jpg?fm=png&auto=format&w=800&blur=500')",
                  }}
                ></div>
                <div
                  className={Style.profile}
                  style={{
                    backgroundImage:
                      "url('https://idronline.org/wp-content/uploads/2021/01/Roopali-feature-image_resize.jpg')",
                  }}
                ></div>
                <div
                  className={Style.profile}
                  style={{
                    backgroundImage:
                      "url('https://www.nasscomfoundation.org/blog/wp-content/uploads/2024/09/Rural-Women-Entrepreneurs.webp')",
                  }}
                ></div>
                <div
                  className={Style.profile}
                  style={{
                    backgroundImage:
                      "url('https://media.istockphoto.com/id/1491551245/photo/female-manager-showing-thumbs-up-sign-in-textile-industry.jpg?s=612x612&w=0&k=20&c=xAesg6rdQFCOgjroq2dVRTEDV6-2KMa8HCi9oIlsbcA=')",
                  }}
                ></div>
                <div
                  className={Style.profile}
                  style={{
                    backgroundImage:
                      "url('https://ifmrlead.org/wp-content/uploads/2024/08/Mid-break-Cover-Newsletter.jpg')",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Second Div */}
          <div className={Style.mainPageFirstDiv} id="AboutUs">
            {/* Design Section */}
            <div className={Style.designSectionSecondDiv}>
              <img
                src="\Assets\Brown Simple Grid Nature Photo Collage3.png"
                alt=""
              />
            </div>

            {/* Content Section */}
            <div className={Style.contentSectionSecondDiv}>
              <p className={Style.contentSectionPara1}>
                <i class="fa-solid fa-heart"></i> About US
              </p>
              <h1 className={Style.contentSectionHeadingSecondDiv}>
                Together, We Empower Each Other to Build a Better World.
              </h1>
              <p className={Style.contentSectionPara2}>
                Our goal is to uplift and empower women, helping them achieve
                their dreams and build a brighter future.
              </p>

              <p className={Style.contentSectionPara3}>
                <i class="fa-solid fa-handshake-angle"></i> Join Us in Raising
                Funds to Make an Impact
              </p>
              <div className={Style.joinUsNowBtn}>
                <button onClick={gotoDonations}>
                  Donate Now{" "}
                  <i class="fa-solid fa-circle-arrow-right fa-xl"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Third Div */}
          <div className={Style.mainPageThirdDiv} id="features">
            <div className={Style.mainPageThirdDivHeadings}>
              <p className={Style.contentSectionPara1}>
                <i class="fa-solid fa-heart"></i> Features
              </p>
              <h1 className={Style.contentSectionHeadingThirdDiv}>
                Our Unique Offerings
              </h1>
            </div>

            <div className={Style.featuresSection}>
              {/* Feature 1 */}
              <div className={Style.featureDiv}>
                <div className={Style.overlay}>
                  <h2>Alternative Financing Models</h2>
                  <p>
                    The platform allows individuals to support women’s goals
                    with small contributions, offering perks like product
                    samples. Women can also apply for interest-free returnable
                    grants.
                  </p>
                  <Link className={Style.featureButton} to="/financingModel">
                    Explore{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={Style.featureDiv}>
                <div className={Style.overlay}>
                  <h2>AI-Powered Credit Evaluation</h2>
                  <p>
                    Instead of relying on collateral or credit history, the
                    platform evaluates creditworthiness using AI. The AI
                    analyzes business transactions, sales data, customer
                    reviews, and even social credibility.
                  </p>
                  <Link className={Style.featureButton} to="/creditEvaluation">
                    Explore{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>

              {/* Feature 3 */}
              <div className={Style.featureDiv}>
                <div className={Style.overlay}>
                  <h2>Financial Literacy Program</h2>
                  <p>
                    Through gamified modules, you can learns how to budget
                    business expenses, build a strong credit profile, and adopt
                    best practices for loan repayment and grow your business in
                    every situation.
                  </p>
                  <Link className={Style.featureButton} to="/financialLiteracy">
                    Explore{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Div */}
          <div className={Style.mainPageFourthDiv} id="AboutUs">
            {/* Content Section */}
            <div className={Style.contentSectionFourthDiv}>
              <p className={Style.contentSectionPara1}>
                <i class="fa-solid fa-heart"></i> MarketPlace
              </p>
              <h1 className={Style.contentSectionHeadingFourthDiv}>
                Building a Marketplace for Growth and Opportunity.
              </h1>
              <p className={Style.contentSectionPara2}>
                Our mission is to empower women entrepreneurs by providing a
                thriving marketplace that fuels their success, drives profits,
                and fosters sustainable growth.
              </p>

              <p className={Style.contentSectionPara3}>
                <i class="fa-solid fa-handshake-angle"></i> Explore MarketPlace
                Now
              </p>
              <div className={Style.joinUsNowBtnMarketPlace}>
                <button onClick={gotoMarketPlace}>
                  Discover the Marketplace{" "}
                  <i class="fa-solid fa-circle-arrow-right fa-xl"></i>
                </button>
                <button onClick={togglePopup}>
                  Showcase Your Product{" "}
                  <i class="fa-solid fa-circle-arrow-right fa-xl"></i>
                </button>
              </div>
            </div>
            {/* Design Section */}
            <div className={Style.designSectionFourthDiv}>
              <img
                src="\Assets\Brown Simple Grid Nature Photo Collage1.png"
                alt=""
              />
            </div>
          </div>

            {/* Overlay Popup */}
            {showPopup && (
            <div className={Style.overlayMarketPlaceProduct}>
              <div className={Style.popupMarketPlaceProduct}>
                <h2>Showcase Your Product</h2>
                <form onSubmit={handleFormSubmit}>
                  <label>
                    Product Name:
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    Product Price:
                    <input type="number" name="price" required />
                  </label>
                  <label>
                    Product Description:
                    <textarea name="description" required></textarea>
                  </label>
                  <label>
                    Product Image:
                    <input type="file" name="image" accept="image/*" required />
                  </label>
                  <div className={Style.popupButtons}>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={togglePopup}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
