import React, { useState } from "react";
import Style from "../App.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function FinancingModel() {
  const [formData, setFormData] = useState({
    amount: "",
    timeframe: "",
    urgency: "",
    businessStage: "",
  });

  const [response, setResponse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/loan-suggestion",
        formData
      );
      setResponse(res.data); // Set the response from the ML model
      setShowPopup(true); // Show the popup with the response
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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

          <div className={Style.financingModelMainDiv}>
            <div className={Style.financingModelMainDivInnerDiv}>
              <div className={Style.financingModelMainDivInnerDiv1}>
                <div className={Style.financingModelMainDivInnerDiv1HeadingDiv}>
                  <h1>Alternative Financing</h1>
                  <p>
                    Our platform offers flexible funding options tailored to
                    your needs. You can choose crowdfunding for urgent small
                    amounts, a combination of crowdfunding and bank loans for
                    moderately large amounts, or total crowdfunding for larger
                    amounts if time permits. For urgent and very large amounts,
                    total loans are available. Donors can contribute and receive
                    perks for their generosity, while you can also seek support
                    from NGOs, angel investors, or CSR funds. A "Want Help"
                    button connects you to the UdyogSakhi team for personalized
                    advice.
                  </p>

                  <div className={Style.stepsForAlternateFinancing}>
                    {/* Step 1 */}
                    <p>
                      <i className="fas fa-search-dollar"></i> Use crowdfunding
                      for small needs.
                    </p>
                    {/* Step 2 */}
                    <p>
                      <i className="fas fa-hand-holding-usd"></i> Combine
                      crowdfunding and loans.
                    </p>
                    {/* Step 3 */}
                    <p>
                      <i className="fas fa-university"></i> Seek support for
                      large amounts.
                    </p>
                  </div>
                </div>
              </div>

              <div className={Style.financingModelMainDivInnerDiv2}>
                {/* New Form for Women Entrepreneurs */}
                <div>
                  <div>
                    <h2 className={Style.fundingFormHeading}>
                      Submit Funding Details
                    </h2>
                    <form
                      className={Style.entrepreneurForm}
                      onSubmit={handleSubmit}
                    >
                      {/* Personal Details */}
                      <div className={Style.formGroup}>
                        <label htmlFor="name">Full Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className={Style.formGroup}>
                        <label htmlFor="contact">Contact Number:</label>
                        <input
                          type="tel"
                          id="contact"
                          name="contact"
                          placeholder="Enter your contact number"
                          required
                        />
                      </div>

                      <div className={Style.formGroup}>
                        <label htmlFor="email">Email Address:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      {/* Business Details */}
                      <div className={Style.formGroup}>
                        <label htmlFor="businessName">Business Name:</label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          placeholder="Enter your business name"
                          required
                        />
                      </div>

                      <div className={Style.formGroup}>
                        <label htmlFor="businessType">Business Type:</label>
                        <select id="businessType" name="businessType" required>
                          <option value="" disabled>
                            Select Business Type
                          </option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="services">Services</option>
                          <option value="others">Others</option>
                        </select>
                      </div>

                      <div className={Style.formGroup}>
                        <label htmlFor="amount">
                          Funding Amount Needed (₹):
                        </label>
                        <input
                          type="text"
                          id="amount"
                          name="amount"
                          placeholder="Enter amount"
                          value={formData.amount}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Timeframe */}
                      <div className={Style.formGroup}>
                        <label htmlFor="timeframe">
                          When do you need the funds?
                        </label>
                        <select
                          id="timeframe"
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select timeframe
                          </option>
                          <option value="immediate">
                            Immediate (Within a week)
                          </option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-months">Within 2 months</option>
                          <option value="flexible">
                            Flexible (No strict deadline)
                          </option>
                        </select>
                      </div>

                      <div className={Style.formGroup}>
                        <label htmlFor="urgency">Urgency:</label>
                        <select
                          id="urgency"
                          name="urgency"
                          required
                          value={formData.urgency}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Urgency Level
                          </option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </div>

                      <div className={Style.formGroup}>
                        <label htmlFor="businessStage">Business Stage:</label>
                        <select
                          id="businessStage"
                          name="businessStage"
                          required
                          value={formData.businessStage}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Business Stage
                          </option>
                          <option value="startup">Startup</option>
                          <option value="growth">Growth</option>
                          <option value="established">Established</option>
                        </select>
                      </div>

                      <div className={Style.formGroup}>
                        <label htmlFor="purpose">Purpose of Funding:</label>
                        <textarea
                          id="purpose"
                          name="purpose"
                          placeholder="Briefly explain the purpose"
                          rows="4"
                          required
                        ></textarea>
                      </div>

                      {/* Crowdfunding Perks */}
                      <div className={Style.formGroup}>
                        <label htmlFor="perks">
                          Crowdfunding Perks (Optional):
                        </label>
                        <textarea
                          id="perks"
                          name="perks"
                          placeholder="Describe perks for donors"
                          rows="4"
                        ></textarea>
                      </div>

                      {/* Supporting Documents */}
                      <div className={Style.formGroup}>
                        <label htmlFor="documents">
                          Upload Business Documents:
                        </label>
                        <input
                          type="file"
                          id="documents"
                          name="documents"
                          multiple
                        />
                      </div>

                      {/* Submission */}
                      <div className={Style.formGroup}>
                        <button type="submit" className={Style.submitButton}>
                          Submit Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
      {showPopup && response && (
        <div className={Style.popupOverlay}>
          <div className={Style.popupContent}>
            <h2>Loan Suggestions</h2>
            <div>
              {/* Option 1: Crowdfunding */}
              {response.option1 && (
                <div className={Style.option}>
                  <p>Crowdfunding: {response.option1}</p>
                  <button
                    className={Style.applyButton}
                    onClick={() => handleApply("Crowdfunding")}
                  >
                    Apply for Crowdfunding
                  </button>
                </div>
              )}

              {/* Option 2: Bank Loans */}
              {response.option2 !== "None" && (
                <div className={Style.option}>
                  <p>Loan Option: {response.option2}</p>
                  <div className={Style.bankList}>
                    <p>Available Banks:</p>
                    <ul>
                      {response.banks && response.banks.length > 0 ? (
                        response.banks.map((bank, index) => (
                          <li key={index} className={Style.bankItem}>
                            {bank.name}
                            <a
                              href={bank.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={Style.applyLink}
                            >
                              Apply Now
                            </a>
                          </li>
                        ))
                      ) : (
                        // Fallback UI when no banks are available in the response
                        <ul>
                          {[
                            {
                              name: "Bank of India",
                              link: "https://bankofindia.co.in",
                            },
                            {
                              name: "State Bank of India",
                              link: "https://sbi.co.in",
                            },
                            { name: "HDFC Bank", link: "https://hdfcbank.com" },
                            {
                              name: "ICICI Bank",
                              link: "https://icicibank.com",
                            },
                          ].map((bank, index) => (
                            <li key={index} className={Style.bankItem}>
                              {bank.name}
                              <a
                                href={bank.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={Style.applyLink}
                              >
                                Apply Now
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Approval Percentage */}
              {response.approval_percentage && (
                <div className={Style.approval}>
                  <p>Approval Percentage: {response.approval_percentage}%</p>
                </div>
              )}
            </div>

            <button className={Style.closeButton} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FinancingModel;
