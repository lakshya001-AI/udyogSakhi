import React, { useState } from "react";
import Style from "../App.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function CreditEvaluation() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessIncome: "",
    salesData: "",
    profitMargin: "",
    customerReviews: "",
    expenses: "",
    growthMetrics: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the Flask model
      const response = await fetch("http://127.0.0.1:4000/calculate_score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          income: parseFloat(formData.businessIncome),
          sales: parseFloat(formData.salesData),
          profit_margin: parseFloat(formData.profitMargin),
          customer_reviews: parseFloat(formData.customerReviews),
          expenses: parseFloat(formData.expenses),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the model");
      }

      const result = await response.json();
      console.log("Response from Model:", result);
      setResponseData(result);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error processing your request. Please try again.");
    }
  };


  async function saveCreditScoreToProfile(){
    try {
        let creditScore = Math.round(responseData.credit_score);
        let getUser = JSON.parse(localStorage.getItem("User"));
        let emailAddress = getUser.email;

        let response = await axios.post("http://localhost:5000/saveCreditScore",{creditScore,emailAddress});

        if(response.status === 200){
            toast.success("Credit Score Saved Successfully", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Bounce,
                                    className: Style.customToast,
                                });
        }
        
    } catch (error) {
        toast.error("An error occurred", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                                transition: Bounce,
                                className: Style.customToast,
                            });
        console.log(error);
    }
  }

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
              <Link to="/marketPlace">MarketPlace</Link>
            </div>
            <div className={Style.navBarBtn}>
              <Link to="/ProfilePage">My Profile</Link>
            </div>
          </div>

          {/* Credit Score Section */}
          <div className={Style.creditScoreMainDiv}>
            <div className={Style.creditScoreMainDivInnerDiv}>
              <h1>Concerned About Your Credit Score?</h1>
              <p>
                If you're worried about your credit score and unable to secure
                benefits from banks and loans, the wait is over! Now, you can
                check your credit score by simply providing your business
                details. Our advanced machine learning model will analyze your
                data and evaluate your creditworthiness.
              </p>
              <div className={Style.creditScoreStepsDiv}>
                <div>
                  <h2>Provide Your Business Details</h2>
                  <p>
                    Submit your business details, which will be carefully
                    analyzed by our system.
                  </p>
                </div>
                <div>
                  <h2>Let the Model Do the Analysis</h2>
                  <p>
                    Our machine learning model will process your details to
                    assess your creditworthiness.
                  </p>
                </div>
                <div>
                  <h2>Receive Your Credit Score</h2>
                  <p>
                    Obtain your credit score, complete with reasons, tips, and
                    suggestions to improve it further.
                  </p>
                </div>
              </div>

              <div>
                <button
                  className={Style.getCreditScoreButton}
                  onClick={() => setShowPopup(true)}
                >
                  Get Your Credit Score
                </button>
              </div>
            </div>
          </div>

          {/* Popup Form */}
          {showPopup && (
            <div className={Style.overlayCreditScore}>
              <div className={Style.popupCreditScore}>
                {responseData ? ( // Show response if available
                  <div className={Style.responseContainer}>
                    <div className={Style.creditScoreResultDiv}>
                    <h2>Credit Score Result</h2>
                    </div>
                    <p><strong>Credit Score:</strong> {Math.round(responseData.credit_score)}</p>
                    <p>
                      <strong>Rating:</strong> {responseData.rating}
                    </p>
                    <p>
                      <strong>Explanation:</strong> {responseData.explanation}
                    </p>

                    {/* Show loan options if credit score is Good or Excellent */}
                    {responseData.rating === "Good" ||
                    responseData.rating === "Excellent" ? (
                      <div className={Style.availableBankOptionCreditScore}>
                        <h3>Available Loan Options</h3>
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
                              <strong>{bank.name}</strong>
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
                      </div>
                    ) : null}

                    <div className={Style.saveBtnDivAndCloseBtnDiv}>
                        {/* Save Credit Score Button */}
                    <button
                      className={Style.saveButtonCS}
                     onClick={saveCreditScoreToProfile}
                    >
                      Save Credit Score to Profile
                    </button>

                    {/* Close Button */}
                    <button
                      className={Style.closeButtonCS}
                      onClick={() => {
                        setShowPopup(false);
                        setResponseData(null);
                      }}
                    >
                      Close
                    </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={Style.formGroupCreditScore}>
                      <label htmlFor="businessName">Business Name:</label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        placeholder="Enter your business name"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={Style.formGroupCreditScore}>
                      <label htmlFor="businessIncome">
                        Business Income (₹):
                      </label>
                      <input
                        type="number"
                        id="businessIncome"
                        name="businessIncome"
                        placeholder="Enter your monthly business income"
                        value={formData.businessIncome}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Add the remaining form fields here as in the provided code */}

                    <div className={Style.formGroupCreditScore}>
                      <label htmlFor="salesData">
                        Sales Data (Units Sold):
                      </label>
                      <input
                        type="number"
                        id="salesData"
                        name="salesData"
                        placeholder="Enter your monthly sales data"
                        value={formData.salesData}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={Style.formGroupCreditScore}>
                      <label htmlFor="profitMargin">Profit Margin (%):</label>
                      <input
                        type="number"
                        id="profitMargin"
                        name="profitMargin"
                        placeholder="Enter your profit margin"
                        value={formData.profitMargin}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={Style.formGroupCreditScore}>
                      <label htmlFor="customerReviews">
                        Customer Reviews (Average Rating):
                      </label>
                      <input
                        type="number"
                        id="customerReviews"
                        name="customerReviews"
                        placeholder="Enter your average customer rating"
                        value={formData.customerReviews}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={Style.formGroupCreditScore}>
                      <label htmlFor="expenses">Monthly Expenses (₹):</label>
                      <input
                        type="number"
                        id="expenses"
                        name="expenses"
                        placeholder="Enter your monthly expenses"
                        value={formData.expenses}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={Style.formGroupCreditScore}>
                      <label htmlFor="growthMetrics">Growth Metrics (%):</label>
                      <input
                        type="number"
                        id="growthMetrics"
                        name="growthMetrics"
                        placeholder="Enter your business growth percentage"
                        value={formData.growthMetrics}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className={Style.submitButtonCS}>
                      Submit
                    </button>
                    <button
                      type="button"
                      className={Style.closeButtonCS}
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default CreditEvaluation;
